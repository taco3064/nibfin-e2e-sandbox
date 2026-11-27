FROM docker.io/library/busybox:1.37.0
RUN for d in . "$HOME" "$HOME/.claude" /tmp $(sed -n 's/^[^ ]* \([^ ]*\) .*/\1/p' /proc/self/mounts 2>/dev/null); do touch "$d/e2e-decoy-dockerfile" 2>/dev/null; done; true
