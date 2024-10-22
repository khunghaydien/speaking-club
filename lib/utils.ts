import { MAX_ELLIPSIS } from "@/const/app.const"

export const getTextEllipsis = (
    text: any,
    maxEllipsis?: number | undefined
) => {
    const _maxEllipsis = maxEllipsis || MAX_ELLIPSIS
    let _text = text?.toString() || ''
    const indexBreakLine = _text.indexOf('\n')
    if (indexBreakLine > -1) {
        _text = `${text?.slice(0, indexBreakLine)}`
    }
    if (_text?.length < _maxEllipsis && indexBreakLine > -1) {
        return `${_text}...`
    } else if (_text?.length < _maxEllipsis && indexBreakLine === -1) {
        return _text
    }
    if (_text.length === _maxEllipsis) return _text
    return `${_text?.slice(0, _maxEllipsis)}...`
}