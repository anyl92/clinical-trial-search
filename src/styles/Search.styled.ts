import styled from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => theme.flex.flexColumnCenter};
`

export const SearchWrapper = styled.section`
  text-align: center;
  padding: 80px 0 160px;
  width: 100%;
  margin: auto;
  max-width: 1040px;
`

export const TitleText = styled.div`
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
`

export const SearchBox = styled.div`
  max-width: 490px;
  margin: 0 auto;
  width: 100%;
`

export const SearchInnerBox = styled.div<{ $isOpen: boolean }>`
  border-radius: 42px;
  border: 2px solid;
  border-color: ${({ $isOpen, theme }) => ($isOpen ? theme.color.borderBottom : theme.color.white)};
  background-color: ${({ theme }) => theme.color.white};
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: relative;
  padding-right: 8px;
`

export const SearchInputWrapper = styled.div`
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 20px 10px 20px 24px;
  font-weight: 400;
`

export const SearchInputWrapperFlex = styled.div`
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding-top: 7px;
  opacity: 0;
`

export const SearchInputBox = styled.div`
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  width: 100%;
`

export const PlaceholderAbsoluteBox = styled.div`
  color: ${({ theme }) => theme.color.placeholderText};
  position: absolute;
  pointer-events: none;
  display: flex;
`

export const PlaceholderImgBox = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`

export const SearchInput = styled.input`
  caret-color: rgb(25, 118, 210);
  padding-right: 25px;
  width: 100%;
  border: 0;
  background-color: transparent;
  min-width: 0;
  appearance: textfield;
  outline-offset: -2px;
`

export const ClearImgBox = styled.div<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 100 : 0)};
  position: absolute;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.clearBg};
  cursor: pointer;
`

export const SearchButton = styled.button`
  border-radius: 100%;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-weight: 500;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  border: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.buttonBg};
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  color: ${({ theme }) => theme.color.white};
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const SearchButtonImgBox = styled.div`
  width: 21px;
  height: 21px;
`
