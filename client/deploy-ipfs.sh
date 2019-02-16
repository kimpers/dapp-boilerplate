rm -rf build
yarn build

echo "Deploying to IPFS..."
output=$(ipfs add -r build )
echo "${output}"
hash_row=$(echo "${output}"| grep build | tail -1)
hash_row_arr=($hash_row)
url="https://cloudflare-ipfs.com/ipfs/${hash_row_arr[1]}"
echo "Deploy successful. Content available at ${url} (copied to clipboard)"
echo "${url}" | pbcopy
