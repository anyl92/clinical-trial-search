import { SearchSuggestionProps } from "../types/search";
import { SickResponseObj } from "../types/api";
import { ReactComponent as PlaceholderSearchIcon } from "../assets/svg/placeholderSearchIcon.svg";

import * as S from "../styles/SearchSuggestion.styled";

function SearchSuggestion({
  selectIndex,
  suggestions,
  loading,
  error,
  keyword,
}: SearchSuggestionProps) {
  return (
    <S.Wrapper>
      {loading ? (
        <S.SearchMainText>검색 중 ...</S.SearchMainText>
      ) : error ? (
        <S.SearchMainText>검색 에러 발생, 문의 부탁드립니다.</S.SearchMainText>
      ) : (
        <>
          <S.SearchRecentBox>
            {suggestions.length === 0 ? (
              <>
                <S.SearchMainText>최근 검색어</S.SearchMainText>
                <div>최근 검색어가 없습니다</div>
              </>
            ) : (
              <S.SearchRecentItemList>
                <S.SearchRecentItem
                  key={keyword}
                  $selectIndex={selectIndex === 0}
                >
                  <S.SearchRecentItemButton type="button">
                    <S.SearchImgBox>
                      <PlaceholderSearchIcon />
                    </S.SearchImgBox>
                    <S.SearchRecentText>{keyword}</S.SearchRecentText>
                  </S.SearchRecentItemButton>
                </S.SearchRecentItem>
                <S.SearchMainText>추천 검색어</S.SearchMainText>
                {suggestions.map((suggestion: SickResponseObj, index) => {
                  return (
                    <S.SearchRecentItem
                      key={suggestion.sickCd}
                      $selectIndex={selectIndex === index + 1}
                    >
                      <S.SearchRecentItemButton type="button">
                        <S.SearchImgBox>
                          <PlaceholderSearchIcon />
                        </S.SearchImgBox>
                        <S.SearchRecentText>
                          {suggestion.sickNm}
                        </S.SearchRecentText>
                      </S.SearchRecentItemButton>
                    </S.SearchRecentItem>
                  );
                })}
              </S.SearchRecentItemList>
            )}
          </S.SearchRecentBox>
          {suggestions.length === 0 && (
            <>
              <S.DivideLine />
              <S.SearchMainText>추천 검색어로 검색해보세요</S.SearchMainText>
              <S.SearchSuggestionBox>
                <S.SearchSuggestionItem>B형간염</S.SearchSuggestionItem>
                <S.SearchSuggestionItem>비만</S.SearchSuggestionItem>
                <S.SearchSuggestionItem>관절염</S.SearchSuggestionItem>
                <S.SearchSuggestionItem>우울증</S.SearchSuggestionItem>
                <S.SearchSuggestionItem>식도염</S.SearchSuggestionItem>
              </S.SearchSuggestionBox>
            </>
          )}
        </>
      )}
    </S.Wrapper>
  );
}

export default SearchSuggestion;
