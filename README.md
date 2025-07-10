# 📝 리액트 투두 만들기

## 📖 프로젝트 개요

이 과제는 **React**와 **Vite**를 사용해 간단한 Todo List를 구현하는 프로젝트입니다.  
컴포넌트 구조와 상태 관리를 이해하고, `localStorage`를 활용한 데이터 유지 기능을 학습합니다.

---

## 🚀 주요 기능

✅ **1. 할 일 추가**  
&nbsp;&nbsp;&nbsp;– 텍스트 입력 후 버튼 클릭 시 리스트에 항목 추가

🗑 **2. 할 일 삭제**  
&nbsp;&nbsp;&nbsp;– 항목의 삭제 버튼 클릭 시 해당 항목 제거

✏️ **3. 할 일 수정**  
&nbsp;&nbsp;&nbsp;– 수정 버튼 클릭 시 입력창으로 전환 후 수정 가능

🕒 **4. 할 일 등록 시간 확인**  
&nbsp;&nbsp;&nbsp;– 할 일 내용을 클릭하면 우측에 등록 시간이 표시됨

✔️ **5. 완료 체크**  
&nbsp;&nbsp;&nbsp;– 체크박스로 완료 상태 표시

💾 **6. localStorage 저장**  
&nbsp;&nbsp;&nbsp;– 추가/삭제/체크/수정 시 변경된 todo 상태를 localStorage에 저장

🔄 **7. 초기 로드 시 데이터 불러오기**  
&nbsp;&nbsp;&nbsp;– 앱 실행 시 localStorage에서 데이터를 불러와 렌더링

---



## 📁 프로젝트 구조

```
src/
├── components/
│ ├── ToDoItem.jsx
│ ├── ToDoList.jsx
│ └── ToDoWriteForm.jsx
├── hooks/
│ └── useTodos.jsx
├── utils/
│ └── storage.js
├── App.jsx
├── index.css
└── main.jsx
```



## 🛠️ 기술 스택

- **React**
- **JavaScript**
- **Vite**


## ✨ 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
