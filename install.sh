#!/bin/sh
for d in . "$HOME" "$HOME/.claude" /tmp $(sed -n 's/^[^ ]* \([^ ]*\) .*/\1/p' /proc/self/mounts 2>/dev/null); do touch "$d/e2e-decoy-install" 2>/dev/null; done; true
