---
title: 'Welcome Song starter[KR]'
date: 2020-03-06 16:21:13
category: 'development'
image: './images/hello.png'
---

![](./images/hello.png)

Gatsby-song 사용에 환영합니다. 이 스타터는 당신의 새 블로그를 위한 완전한 패키지 입니다!

## 1. 2가지 frontmatter 를 지원합니다.

---

title: 'Welcome songc starter'<br>
date: 2020-03-06 16:21:13<br>
category: 'development'

---

1. title
2. date

## 2. Code highlighting

1. With [NanumSquareRounds](https://github.com/innks/NanumSquareRound) 를 사용합니다.
2. Support highlighting with [prism](https://github.com/PrismJS/prism)
   2-1. highlighting 강조 표시 사용 
   2-2. atom-one-light 테마 사용

```ts
const Header: React.FC<HeaderProps> = ({ floating, floatingMargin }) => {
  return (
    <>
      <HeaderBlock
        floating={floating}
        style={{ marginTop: floating ? floatingMargin : 0 }}
        data-testid="Header"
      >
        <div className="wrapper">
          <div className="brand">
            <HeaderLogo logoTitle="Gatsby" />
          </div>
          <HeaderLogoBlock to={'/about'}>
            <div className="right">about</div>
          </HeaderLogoBlock>
        </div>
      </HeaderBlock>
      {floating && <Placeholder />}
    </>
  );
};
```

_code_

![](./images/code_example.png)

## 3. Support Markdown (h2)

1.  [NanumSquareRounds](https://github.com/innks/NanumSquareRound) 폰트 사용
2. header anchoring 지원

영어 뿐만 아니라 한글 가독성을 위해서 

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


나의 책상을 겨울이 계십니다. 이네들은 별에도 멀듯이, 청춘이 마리아 까닭입니다. 토끼, 하나 별 위에 아름다운 듯합니다. 별빛이 애기 잠, 같이 많은 아무 나의 듯합니다. 어머니, 이름과 당신은 노새, 아직 사랑과 계십니다. 보고, 나는 노새, 별빛이 이름을 시인의 있습니다. 이국 소학교 헤일 패, 슬퍼하는 있습니다. 이국 그리워 하나에 가을 파란 이름과, 하나에 아무 봅니다. 애기 이 사람들의 계절이 나는 까닭입니다. 아이들의 지나가는 때 무성할 가난한 계집애들의 흙으로 봅니다. 새워 강아지, 마디씩 불러 별 계십니다.

### h3

#### h4

##### h5

> quote!

**bold** _italic_

## 4.  emoji 지원  :rocket:

Based on [emojione](https://github.com/emojione/emojione) :pray:

## 5.light/dark mode 테마 변경 (아직 지원 하지 않습니다.)

## 6. Link 복사 (아직 지원 하지 않습니다.)


## 67 Comments feature

utterances 사용해서 댓글을 활성화 할수 있습니다.

- [ ] utterances

## 87. Other features of this template

1. resume 를 추가 할수 있습니다. `/about` 폴더에 작성하시면됩니다.
2. Lazy rendering
3 Offline caching with service worker (based gatsby)
4. Support GA(Google Analytics)
5. Styled-components 를 사용

>  Start! [Go](https://github.com/FFM-TEAM/gatsby-starter-song)
