---
title: 나만의 도메인을 vercel 앱에 적용해보자 | 블로그 제작일지
summary: Google Domains를 통해 내 도메인을 구입한 후 이를 Vercel을 통해 배포한 앱에 적용해보기
slug: apply-my-domain-to-vercel-app
date: 2023. 06. 20.
category: blog
series: 블로그 제작일지
tag:
    - vercel
    - google domains
    - dns
thumbnail: https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_0.png
---

<br>

이번에는 도메인을 구입하여 지금까지 만든 vercel 앱에 적용해보자.

<br>

# Google Domains를 선택한 이유

들어가기에 앞서, 필자는 DNS 호스팅 서비스로 `Google Domains`를 이용했지만 다른 서비스를 이용하여도 된다. 대표적으로, `가비아`나 `카페24` 등이 있을 것이다. 여기서 `Google Domains`를 선택한 이유는 크게 다음과 같은 3가지이다.

<br>

1.  1년 호스팅 비용이 다른 서비스에 비해서 저렴했다.
다른 서비스는 1년에 약 2만원 중후반대의 가격이었지만, 구글 도메인은 1년에 12달러(한화 약 15,000원)로 저렴한 편이었다. (적어도, 내 도메인에 한해서는 그렇다.)

1.  이메일 포워딩 기능을 사용할 수 있다.
`Google Domains`로 도메인을 구입하면, 추가 비용 없이 도메인에 추가 이메일 주소나 이메일 별칭을 만들 수 있다. 예를 들어, 내가 구입한 `julyy.dev` 도메인을 이메일 주소에서 @ 뒷부분의 도메인 주소로 사용하여 `contact@julyy.dev`와 같은 커스텀 이메일 주소를 만들고, 이를 기존 이메일 대신 사용할 수 있다. 특히, 기존 이메일이 Gmail 주소인 경우 수신뿐만 아니라 송신까지 별칭으로 가능하다. 자세한 것은 [이 문서](https://support.google.com/domains/answer/3251241?authuser=0&hl=ko#emailForwarding)를 참고하길 바란다.

1.  단지 “구글”이라 더 믿음이 간다.
구글은 슈퍼 대기업이니까 좀 더 빠르고 안정적이지 않을까 생각한다..는 농담이고, 구글이라 가능한 여러 장점들이 있다. 앞서 말한, 이메일 포워딩 기능을 포함해서 서브 도메인 생성, 개인정보 보호 기능 무료 제공, 손쉬운 관리 등의 장점이 있다. (구글 짱짱)

<br>

위와 같은 이유들로 `Google Domains`를 선택했지만, 상황에 따라 다른 서비스가 최선의 선택이 될 수 있다. 여러 서비스를 잘 비교해보고 자신에게 맞는 최적의 서비스를 고르도록 하자.

<br>

# 이제 도메인을 사서 적용해보자!

먼저, [구글 도메인](https://domains.google/) 사이트로 이동하여, 구매하고자 하는 도메인을 검색한다. 

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_1.png)

<br>

검색하면 위와 같이 사용 가능 여부와 가격, 그외 추천 도메인 등의 정보를 확인할 수 있다. 확인 후, 구매를 원하면 카트에 담아주자.

<br>

카트로 이동하면 다음과 같은 결제 페이지가 나타난다.

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_2.png)

<br>

개인정보 보호와 자동 갱신을 꼭 체크해주자.

.dev 도메인의 경우, SSL 인증서가 필요하다는 경고가 뜨는데, 후에 vercel에 도메인을 등록할 때 이를 자동으로 생성하여 연결해준다.

<br>

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_3.png)

만약, 현재 국가가 한국으로 설정되어있다면 위와 같이 한국에서는 Google Domains를 사용할 수 없다는 메시지가 뜬다. 아직, 한국에서 공식 서비스를 지원하지 않기 때문이다.

<br>

이럴 땐, 왼쪽 사이드메뉴에서 국가를 미국으로 변경해주면 된다.

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_4.png)

<br>

그 후 결제 버튼을 누르면, 주소와 카드 정보를 입력하는 창이 나온다. 이때, 주소는 한국 주소를 입력하여도 무관하다.

<br>

모든 정보를 입력 후 결제를 완료하면, 도메인 구매가 완료되고 구매한 Gmail 계정으로 다음처럼 확인 메일이 날라온다.

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_5.png)

이메일 확인을 완료해주면 진짜로 도메인 구매가 완료된다.

<br>

이제 vercel app에 구매한 도메인을 연결해 줄 차례다.

배포한 vercel app에서 `Settings > Domains` 메뉴를 선택하면 도메인을 관리할 수 있는 페이지가 나온다. 처음에는 vercel에서 기본으로 제공하는 `.vercel.app` 형식의 도메인이 등록되어있다.

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_6.png)

<br>

입력창에 구매한 도메인을 입력한 후 Add 버튼을 클릭한다.

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_7.png)

<br>

그러면 다음과 같이 어떤 형식으로 리다이렉트 방식을 선택하라고 한다.

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_8.png)

<br>

첫 번째는 [`www.julyy.dev`](http://www.julyy.dev/) 를 메인 주소로 추가하고, `julyy.dev` 를 입력받았을 때 [`www.julyy.dev`](http://www.julyy.dev/) 로 리다이렉트 시키는 방식이고, 두 번째는 그 반대, 마지막 세 번째는 단순히 `julyy.dev` 만 추가하는 방식이다.

~~

첫 번째 방식이 추천하는 방식이라고 되어있으니 첫 번째를 선택하고 Add 버튼을 클릭한다.

<br>

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_9.png)

그러면, 다음과 같이 두 개의 도메인이 생성되는데, 이 리소스 레코드를 다시 Google Domains에 등록해주어야 한다.

<br>

다시, Google Domains로 돌아와 내 도메인에서 구매한 도메인을 선택한 후, DNS 메뉴를 클릭하면 리소스 레코드를 입력하는 페이지가 나온다.

<br>

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_10.png)

<br>

여기서 우리는 www가 없는 버전과 있는 버전 두가지를 모두 추가해주어야 하므로, 새 레코드 만들기 버튼을 클릭한 후 다음과 같이 입력하고 저장한다.

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_11.png)

<br>

그리고 다시 vercel 설정 페이지로 돌아와주면 자동으로 도메인 연결을 시작하고, 심지어 자동으로 SSL 인증서를 생성하여 연결해준다.

![](https://s3.ap-northeast-2.amazonaws.com/julyy.dev/apply-my-domain-to-vercel-app_12.png)

<br>

5-10분 정도 기다리고 나면 모든 연결이 완료되고, 이제 등록한 도메인으로 내 웹사이트에 접속할 수 있다!

