import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import manualData from "../assets/data";
import emergencyImg from "../assets/emergency-contact.jpg";
import "../assets/styles.css";

const categories = [
  {
    key: "disaster",
    icon: "🚨",
    title: "재난대응관리",
    description: "재난 발생 시 신속한 대응과 체계적인 관리를 위한 종합 가이드",
  },
  {
    key: "safety",
    icon: "⚠️",
    title: "안전사고관리",
    description: "작업장 안전 규정과 사고 예방을 위한 실무 매뉴얼",
  },
  {
    key: "facility",
    icon: "🏢",
    title: "시설물관리",
    description: "건물 및 시설물의 효율적 유지보수와 관리 방안",
  },
  {
    key: "emotional",
    icon: "💙",
    title: "감정노동자 보호",
    description: "감정노동자의 심리적 건강과 권익 보호를 위한 지원 체계",
  },
  {
    key: "ethics",
    icon: "⚖️",
    title: "윤리경영",
    description: "투명하고 공정한 기업 운영을 위한 윤리 실천 가이드",
  },
  {
    key: "human-rights",
    icon: "👥",
    title: "인권경영",
    description: "모든 구성원의 인권을 존중하는 포용적 조직 문화 구축",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleCardClick = (key) => {
    navigate(`/${key}`);
  };

  const handleSearchChange = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(e.target.value);

    if (!keyword) {
      setSearchResults([]);
      return;
    }

    const results = [];
    Object.entries(manualData).forEach(([key, category]) => {
      category.items.forEach((item) => {
        if (
          item.title.toLowerCase().includes(keyword) ||
          item.description.toLowerCase().includes(keyword)
        ) {
          results.push({
            ...item,
            categoryKey: key,
            categoryTitle: category.title,
          });
        }
      });
    });

    setSearchResults(results);
  };

  return (
    <div className="container">
      {/* 헤더 */}
      <div className="header">
        <h1>안전감사팀 종합 매뉴얼</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
            placeholder="검색어를 입력하세요..."
          />
        </div>
      </div>

      {/* 검색 결과 표시 */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>🔍 검색 결과</h3>
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => navigate(`/${result.categoryKey}`)}
            >
              <strong>{result.title}</strong> — {result.categoryTitle}
            </div>
          ))}
        </div>
      )}
      {searchTerm && searchResults.length === 0 && (
        <div className="no-results">검색 결과가 없습니다.</div>
      )}

      {/* 카테고리 카드 */}
      <div className="main-grid">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="category-card"
            onClick={() => handleCardClick(cat.key)}
          >
            <div className="category-icon">{cat.icon}</div>
            <div className="category-title">{cat.title}</div>
            <div className="category-description">{cat.description}</div>
          </div>
        ))}
      </div>

      {/* 푸터 */}
      <div className="footer">
        <div className="company-logo">🏢 회사 로고</div>
        <button
          className="emergency-contact"
          onClick={() =>
            window.open(emergencyImg, "_blank", "noopener,noreferrer")
          }
        >
          📞 비상연락망
        </button>
      </div>
    </div>
  );
};

export default Home;