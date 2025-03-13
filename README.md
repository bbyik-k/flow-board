# Flow Board

🚀 **A modular TypeScript-based board for managing images, videos, notes, and todos.**  
📌 TypeScript 기반으로 개발된 컴포넌트 시스템으로, **React 없이도 동적인 UI**를 구현하며,  
 컴포넌트 추가 및 동작과 관련된 HTML 요소의 동작 방식을 탐구하는 프로젝트입니다.

---

## **🔹 주요 기능**

☑️ **드래그 앤 드롭 방식의 콘텐츠 관리**  
✅ **이미지(Image), 비디오(Video), 노트(Note), 투두(Todo) 추가/삭제 가능**  
✅ **TypeScript의 클래스(Class), 인터페이스(Interface), 제네릭(Generic)을 활용한 컴포넌트 기반 설계**  
☑️ **각 요소들의 위치를 자유롭게 조정하여 사용자 맞춤형 UI 구성 가능**  
✅ **모듈화된 코드 구조로 유지보수 용이**

---

## **🔹 개발 환경**

- **언어**: TypeScript
- **컴포넌트 시스템**: Class 기반 UI 컴포넌트 설계 (`component.ts`)
- **미디어 입력 처리**: `media-input.ts`
- **다이얼로그 및 팝업**: `dialog.ts`
- **이미지 및 페이지 렌더링**: `image.ts`, `page.ts`
- **빌드 시스템**: ES Module (`dist/app.js` 사용)

---

## **🔹 설치 및 실행 방법**

### **1️⃣ 프로젝트 클론**

```sh
git clone https://github.com/your-username/flow-board.git
cd flow-board
```

### **2️⃣ 의존성 설치**

이 프로젝트는 TypeScript만 사용하며 추가적인 패키지 설치 없이 실행 가능합니다.  
TypeScript를 직접 실행하려면:

```sh
npx tsc
```

### **3️⃣ 개발 서버 실행**

로컬 환경에서 테스트하려면 간단한 HTTP 서버를 실행하세요.

```sh
npx serve
# 또는
python3 -m http.server
```

그 후, 브라우저에서 `http://localhost:5000` 또는 `http://localhost:8000`로 접속합니다.  
app개발 환경에 따라 3000번 포트 등 다른 포트에서 실행될 수도 있습니다.

---

## **🔹 프로젝트 구조**

```
📦flow-board
┣ 📂dist  # 컴파일된 JavaScript 파일
┣ 📂src   # TypeScript 소스 코드
┃ ┣ 📂components
┃ ┃ ┣ 📂dialog    # 팝업 다이얼로그 관련 코드
┃ ┃ ┃ ┣ 📂input
┃ ┃ ┃ ┃ ┣ 📜media-input.ts
┃ ┃ ┃ ┃ ┗ 📜text-input.ts
┃ ┃ ┃ ┣ 📜.DS_Store
┃ ┃ ┃ ┗ 📜dialog.ts
┃ ┃ ┣ 📂item    # 각 아이템 관련 기능
┃ ┃ ┃ ┣ 📜image.ts
┃ ┃ ┃ ┣ 📜note.ts
┃ ┃ ┃ ┣ 📜todo.ts
┃ ┃ ┃ ┗ 📜video.ts
┃ ┃ ┣ 📂page    # page 내 컴포넌트 추가 로직
┃ ┃ ┃ ┗ 📜page.ts
┃ ┃ ┣ 📜.DS_Store
┃ ┃ ┗ 📜component.ts
┃ ┣ 📜.DS_Store
┃ ┗ 📜app.ts
┣ 📂style
┃ ┗ 📜style.css   # 스타일 파일
```

---

## **🔹 주요 컴포넌트 설명**

| 파일명           | 설명                                           |
| ---------------- | ---------------------------------------------- |
| `app.ts`         | 메인 애플리케이션 로직 (초기화 및 이벤트 처리) |
| `component.ts`   | TypeScript 기반 UI 컴포넌트 시스템             |
| `dialog.ts`      | 팝업 다이얼로그 구현                           |
| `media-input.ts` | 이미지/비디오 입력 처리                        |
| `image.ts`       | 이미지 관련 로직                               |
| `page.ts`        | 전체 페이지 렌더링                             |

---
