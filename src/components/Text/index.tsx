import { skeletonMixin } from "../../components/Skeleton"
import { reg16BitColor, regUnits } from "../../constants/regExp"
import React from "react"
import styled, { css } from "styled-components"

export interface TextProps {
	/* Высота skeleton [ Если нет начального текста ]
	[ Строка должна включать единицы измерения ] */
	skeletonHeight?: string
	/* Состояние skeleton */
	skeleton?: boolean
	/* Миксин созданный с помощью styled css [ Кастомные стили ] */
	cssMixin?: ReturnType<typeof css>
	/* Имя цвета шрифта из палитры темы [ Или цвет в 16-битном формате ] */
	color?: string
	/* Отображаемое значение */
	text?: string
	/* Html тэг */
	tag?: string
}

export interface TextWrapperProps {
	$skeletonHeight?: string
	$skeleton?: boolean
	$cssMixin?: ReturnType<typeof css>
	$color?: string
}

export const Text = ({ text, tag, skeleton, color, skeletonHeight, cssMixin }: TextProps) => {
	const height = regUnits.test(skeletonHeight || "") ? skeletonHeight : "12px"
	return (
		<TextWrapper
			$skeletonHeight={text ? "auto" : height}
			$color={color}
			$skeleton={skeleton}
			$cssMixin={cssMixin}
			as={tag}
		>
			{text}
		</TextWrapper>
	)
}

const TextWrapper = styled.span<TextWrapperProps>`
	${({ $skeletonHeight }) => $skeletonHeight !== "auto" && "display: block"};
	min-height: ${({ $skeletonHeight }) => $skeletonHeight};
	color: ${({ $color, $skeleton, theme }) => {
		return $skeleton
			? "transparent"
			: reg16BitColor.test($color || "")
				? $color
				: theme.color.text.primary
	}};
	${({ $cssMixin }) => $cssMixin && $cssMixin}
	${({ $skeleton }) => $skeleton && skeletonMixin}
`
