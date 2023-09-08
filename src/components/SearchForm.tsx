import { useRef } from "react";

import { ReactComponent as ButtonSearchIcon } from "../assets/svg/buttonSearchIcon.svg";
import { ReactComponent as ClearIcon } from "../assets/svg/clearIcon.svg";
import { ReactComponent as PlaceholderSearchIcon } from "../assets/svg/placeholderSearchIcon.svg";

import * as S from "../styles/Search.styled";
import { SearchFormProps } from "../types/search";

function SearchForm({
  getInput,
  keyword,
  changeIndexByKeyDown,
  isOpen,
}: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <S.SearchInnerBox $isOpen={isOpen} onSubmit={(e) => e.preventDefault()}>
      <S.SearchInputWrapper>
        <S.SearchInputWrapperFlex />
        <S.SearchInputBox
          onClick={() => {
            inputRef.current?.focus();
          }}
        >
          {!isOpen && !keyword && (
            <S.PlaceholderAbsoluteBox>
              <S.PlaceholderImgBox>
                <PlaceholderSearchIcon />
              </S.PlaceholderImgBox>
              <div>질환명을 입력해 주세요.</div>
            </S.PlaceholderAbsoluteBox>
          )}
          <S.SearchInput
            ref={inputRef}
            autoFocus
            type="text"
            value={keyword}
            onBlur={() => {
              changeIndexByKeyDown.setIndex(-1);
            }}
            onChange={(e) => getInput(e.target.value)}
            onFocus={() => {
              changeIndexByKeyDown.setIndex(0);
            }}
          />
          <S.ClearImgBox
            $isOpen={isOpen}
            onClick={() => {
              getInput("");
            }}
          >
            <ClearIcon />
          </S.ClearImgBox>
        </S.SearchInputBox>
      </S.SearchInputWrapper>
      <S.SearchButton type="button">
        <S.SearchButtonImgBox>
          <ButtonSearchIcon />
        </S.SearchButtonImgBox>
      </S.SearchButton>
    </S.SearchInnerBox>
  );
}
export default SearchForm;
