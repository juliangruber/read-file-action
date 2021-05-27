# read-file-action

Read file contents.
Note: Forked to control release schedule and changes.

## Usage

```yaml
steps:
  - name: Read package.json
    id: package
    uses: travelaudience/read-file-action@v1
    with:
      path: ./package.json
  - name: Echo package.json
    run: echo "${{ steps.package.outputs.content }}"
```

## License

MIT
