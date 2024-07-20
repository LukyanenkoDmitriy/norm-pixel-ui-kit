reset = "\x1b[0m"
fgRed = "\x1b[31m"

module.exports = {
	parserPreset: {
		parserOpts: {},
		headerPattern: /([(ADD|UPDATE|REWORK|FIX)]: .*'])/
	},
	rules: {
		"custom-length-format": [2, "always"],
		"custom-header-format": [2, "always"],
	},
	plugins: [
		{
			rules: {
				"custom-header-format": (parsed) => {
					const [type] = parsed.header.split(":")
					const regexPattern = /^[(ADD|UPDATE|REWORK|FIX)]/

					if (!regexPattern.test(type.trim())) {
						return [
							false,
							` ${fgRed}Сообщение :[ADD|UPDATE|REWORK|FIX]: message${reset}`
						]
					}

					return [true]
				},
				"custom-length-format": (parsed) => {
					const [type] = parsed.header.split(":")
					const length = 100
					if (type.length > length) {
						
						return [
							false,
							` ${fgRed}Header must not be longer than ${length} characters, current length is ${type.length}${reset}`
						]
					}

					return [true]
				}
			}
		}
	]
}
