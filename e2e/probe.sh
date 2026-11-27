#!/bin/sh
# nibfin-e2e probe: prints key=value facts about the Job environment. Never prints secrets.
echo "uid=$(id -u)"
for s in /run/podman/podman.sock /var/run/docker.sock /run/docker.sock "${XDG_RUNTIME_DIR:-/nonexistent}/podman/podman.sock"; do
  if [ -S "$s" ]; then echo "socket=$s"; fi
done
if [ -n "${DOCKER_HOST+x}" ]; then echo "env_set=DOCKER_HOST"; fi
if [ -n "${CONTAINER_HOST+x}" ]; then echo "env_set=CONTAINER_HOST"; fi
echo "auto_memory=${CLAUDE_CODE_DISABLE_AUTO_MEMORY:-unset}"
echo "home=$HOME"
echo "claude_config_dir=${CLAUDE_CONFIG_DIR:-unset}"
pid=$$
while [ -n "$pid" ] && [ "$pid" != 0 ]; do
  echo "ancestor=$(cat /proc/$pid/comm 2>/dev/null)"
  pid=$(sed -n 's/^PPid:[[:space:]]*//p' /proc/$pid/status 2>/dev/null)
done
for f in CLAUDE.md .mcp.json .claude/skills/e2e-probe-skill/SKILL.md; do
  if [ -e "$f" ]; then echo "exists:$f=yes"; else echo "exists:$f=no"; fi
  if git ls-files --error-unmatch "$f" >/dev/null 2>&1; then echo "tracked:$f=yes"; else echo "tracked:$f=no"; fi
done
for d in . "$HOME" /tmp $(sed -n 's/^[^ ]* \([^ ]*\) .*/\1/p' /proc/self/mounts 2>/dev/null); do
  for m in "$d"/e2e-decoy-*; do if [ -e "$m" ]; then echo "decoy=$m"; fi; done
done
if [ -f .claude/settings.json ]; then echo "workspace_settings=$(tr -d '\n' < .claude/settings.json)"; else echo "workspace_settings=absent"; fi
echo "node=$(node --version 2>&1 | head -n 1)"
echo "python=$(python3 --version 2>&1 | head -n 1)"
echo "go=$(go version 2>&1 | head -n 1)"
