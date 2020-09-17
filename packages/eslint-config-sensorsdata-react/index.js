module.exports = {
  "extends": [
    "eslint-config-sensorsdata",
    "eslint-config-airbnb/rules/react",
    "eslint-config-airbnb/rules/react-a11y",
    "eslint-config-airbnb/rules/react-hooks",
    "./rules/import.yml",
    "./rules/react.yml"
  ].map(require.resolve),
  "plugins": [
    "react",
    "react-hooks"
  ]
}