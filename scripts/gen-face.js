#!/usr/bin/env node
const fs = require('fs')
const result = []
Array.from(Array(33).keys()).map((v, i) => {
    const data = fs.readFileSync(`assets/Face${v+1}.svg`);
    result.push(`export const Face${v+1} = ({...props}: ShapeProps) => (
  <svg {...defaultProps} {...props}>
   ${data}</svg>
)

`)
})

fs.writeFileSync('/tmp/file.tsx', result.join('\n'))
