import { checkUnits, checkColor } from "../../utils"
import { skeletonMixin } from "../../components"
import React, { PropsWithChildren } from "react"
import styled, { css } from "styled-components"

export interface TextProps {
	/* Высота skeleton [ Если нет начального текста ]
	 * [ Строка должна включать единицы измерения ]
	 * [ Для числа единицы измерения будут пиксели ] */
	skeletonHeight?: string | number
	/* Состояние skeleton */
	skeleton?: boolean
	/* Миксин созданный с помощью styled css [ Кастомные стили ] */
	cssMixin?: ReturnType<typeof css>
	/* Имя цвета шрифта из палитры темы [ Или цвет в 16-битном формате ] */
	color?: string
	/* Отображаемое значение */
	text?: string
	/* Размер шрифта
	 * [ Строка должна включать единицы измерения ]
	 * [ Для числа единицы измерения будут пиксели ] */
	fontSize?: string | number
	/* Html тэг */
	tag?: string
}

export interface TextWrapperProps {
	$skeletonHeight?: string | number
	$skeleton?: boolean
	$cssMixin?: ReturnType<typeof css>
	$color?: string
	$fontSize?: string | number
}

export const Text = ({
	text,
	children,
	tag,
	skeleton,
	color,
	fontSize,
	skeletonHeight,
	cssMixin
}: PropsWithChildren<TextProps>) => {
	const checkHeight = children || text
	return (
		<TextWrapper
			$skeletonHeight={checkHeight ? "auto" : skeletonHeight}
			$fontSize={fontSize}
			$color={color}
			$skeleton={skeleton}
			$cssMixin={cssMixin}
			as={tag}
		>
			{children || text}
		</TextWrapper>
	)
}

const TextWrapper = styled.span<TextWrapperProps>`
	${({ $skeletonHeight }) => $skeletonHeight !== "auto" && "display: block"};
	font-size: ${({ $fontSize }) => checkUnits("inherit", $fontSize)};
	min-height: ${({ $skeletonHeight }) => checkUnits("1em", $skeletonHeight)};
	color: ${({ $color, $skeleton }) => {
		return $skeleton ? "transparent" : checkColor("inherit", $color)
	}};
	${({ $cssMixin }) => $cssMixin && $cssMixin}
	${({ $skeleton }) => $skeleton && skeletonMixin}
`
