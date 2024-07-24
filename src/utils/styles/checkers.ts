import { reg16BitColor, regOnlyDigits, regUnits } from "../../constants"

export const checkColor = (defaultColor: string, checkColor?: string) => {
	return reg16BitColor.test(checkColor || "") ? checkColor : defaultColor
}

export const checkUnits = (defaultSize: string, checkSize?: string | number) => {
	const check = checkSize + ""
	return regOnlyDigits.test(check)
		? check + "px"
		: regUnits.test(check || "")
			? checkSize
			: defaultSize
}
