import styled from 'styled-components/native'
import AlertSVG from '@assets/icons/alert-circle.svg'
import CameraSVG from '@assets/icons/camera.svg'

export const colors = {
	primary: '#108FA3',
	secondary: '#0CA6BF',
	tertiary: '#36C2D9',
	quaternary: '#0ED8D1',
	quinary: '#66FFFF',
	error: '#E16036',
	success: '#A1C349',
	alert: '#EAD637',
	darkGrey: '#5D615D',
	grey: '#979E97',
	lightGrey: '#D1D1D1',
	starYellow: '#FFD428',
	daisy: '#FAFAFA',
	white: '#FFFFFF',
	homolog: '#C41C37',
	development: '#303030'
}

export const createStyledArg = <T extends Array<any>>(...rules: T): T => rules

const defaultIconRules = createStyledArg`
	color: ${colors.secondary};
	height: 13px;
	margin-right: 6px;
	width: 13px;
`

export const AlertIcon = styled(AlertSVG)(...defaultIconRules)

export const CameraIcon = styled(CameraSVG)(...defaultIconRules)
