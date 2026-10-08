#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch (orphan, single commit).
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ -n "$(git status --porcelain --untracked-files=no)" ]]; then
  echo "Uncommitted changes on $(git branch --show-current); commit them first." >&2
  exit 1
fi

remote_url=$(git remote get-url origin)
src_sha=$(git rev-parse --short HEAD)

npm run build

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

cp -R dist/. "$tmp"
touch "$tmp/.nojekyll"

cd "$tmp"
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $src_sha"
git push -f "$remote_url" gh-pages

echo "Deployed $src_sha to gh-pages."
