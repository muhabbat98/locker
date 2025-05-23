import js from "@eslint/js"
import globals from "globals"
import prettier from "eslint-config-prettier"

/** @type {import('eslint').Linter.config[]} */

export default[
    js.configs.recommended,
    {
        files:["**/*.ts"],
        languageOptions:{
            globals:{...globals.browser, ...globals.node},
            parserOption:{
                ecmaFeatures:{
                    tsx:true
                }
            }
        }
    },
    prettier
]