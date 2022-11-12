import { exec } from 'child_process';
import path from 'path';
import { readFile } from 'fs'

const installPath = await new Promise((resolve) => {
    exec(`WMIC PROCESS WHERE name='LeagueClientUx.exe' GET commandline`, (err, stdout, stderr) => {
        if (err || !stdout) {
            return;
        }

        const parts = stdout.match(/"--install-directory=(.*?)"/);
        resolve(parts[1]);
    })
})

if (!installPath) {
    throw new Error('install path not found');
}

const lockfilePath = path.join(installPath, 'lockfile');

const lockfileData = await new Promise((resolve) =>
    readFile(lockfilePath, 'utf8', (err, data) => {
        if (err) {
            return;
        }

        const parts = data.split(':');

        resolve({
            process: parts[0],
            pid: parts[1],
            port: parts[2],
            password: parts[3],
            protocol: parts[4]
        })
    })
)

const password = btoa(`riot:${lockfileData.password}`)

console.log({
    port: lockfileData.port,
    password: password
})