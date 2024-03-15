setup
step 1 : npm init -y
         npm install --save-dev typescript jest ts-jest @types/jest

step 2 : create tsconfig.json and add this code inside
          {
              "compilerOptions": {
                  "target": "ESNext",
                  "module": "CommonJS",
                  "strict": true,
                  "esModuleInterop": true
              }
          }

step 3 : add this to package.json
          "jest": {
            "preset": "ts-jest"
          }

execute 
run code : ts-node src/merge.ts
run test : npx jest
