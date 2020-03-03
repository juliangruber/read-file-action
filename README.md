# read-file-action

Read file contents.

## Usage

```yaml
steps:
  - name: Read package.json
    id: package
    uses: juliangruber/read-file-action@v1
    with:
      path: ./package.json
  - name: Echo package.json
    run: echo ${{ steps.package.outputs.content }}
```

## License

MIT
