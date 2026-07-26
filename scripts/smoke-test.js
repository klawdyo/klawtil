// Empacota o pacote como o npm faria e valida que `require()`/`import` funcionam
// com o que realmente vai para o tarball publicado — não com o código fonte.
const { execFileSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const root = path.resolve(__dirname, '..')
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'klawtil-smoke-'))

try {
  const packOutput = execFileSync('npm', ['pack', '--pack-destination', tmpDir], {
    cwd: root,
    encoding: 'utf8',
    shell: true,
  })
  const tarballName = packOutput.trim().split('\n').pop()
  const tarballPath = path.join(tmpDir, tarballName)

  execFileSync('npm', ['init', '-y'], { cwd: tmpDir, stdio: 'ignore', shell: true })
  execFileSync('npm', ['install', tarballPath], { cwd: tmpDir, stdio: 'inherit', shell: true })

  const checkScriptPath = path.join(tmpDir, 'check.js')
  fs.writeFileSync(
    checkScriptPath,
    "const k = require('klawtil');\n" +
      "if (typeof k !== 'object' || k === null) {\n" +
      "  throw new Error(\"require('klawtil') não retornou um objeto válido\");\n" +
      '}\n'
  )
  execFileSync('node', [checkScriptPath], { cwd: tmpDir, stdio: 'inherit' })

  console.log('smoke-test ok: require(\'klawtil\') funciona a partir do pacote publicado')
} finally {
  fs.rmSync(tmpDir, { recursive: true, force: true })
}
