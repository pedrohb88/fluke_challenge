<h1 align="center">Welcome to fluke_challenge 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

> App desenvolvido em React Native para o desafio #1 da vaga de desenvolvedor front-end da Fluke.

## Sumário

  - [Como testar](#como_testar)
  - [O App](#o_app)
  - [Exercício 2](#exercicio_2)

## Como testar<a name="como_testar"></a>

O `apk` do App se encontra disponível para download em [Fluke Apk - Google drive](https://drive.google.com/file/d/1AcACXuDrNZm_Utc8t1FJ6VT-pEn9AWJa/view?usp=sharing).

Caso queira testar localmente, basta ter um dispositivo android conectado via USB ou um emulador em execução e rodar o comando:

```
npm run android
```

## O App<a name="o_app"></a> 

O App conta com 3 telas, possuindo as funções de: consultar consumo e pacote contratado, contratar adicionais para o pacote, consultar histórico de consumo e uma seção de principais perguntas e respostas sobre a Fluke. 

### Consumo e Pacote
Tela principal do App, apresenta o consumo de dados e de minutos do usuário (em valores absolutos e em porcentagem através de um gráfico), além de todas as informações do pacote atual. A visualização do consumo de dados ou de minutos pode ser alternada utilizando os botões no topo da tela. 

   <img src="https://lh3.googleusercontent.com/AVYahgsi03Izink4uXDZfydGLIx_aBsOSbW3g3BtbjApg5WHX9npmIRqm99GiA_Y46E17Y9fhSCTp8CIbjNzNIien9mEH_UMYDv44fHbtynH1o6Reo8WTukupSs5i5u_cRdB_MR4wuW0mWiDkHQqJeLLz85cKqGZ2PyhyZozEpq5ihBwPIw3unhNvBIGjlIgcnIapqb-PWbDEqtY6oE8LEycR7Dm60przSIcSwzeGa-gTtW493bSbD3lqTWzhvWap7dsq_9jgR_56XIgNs7Q4X7N0bdl0dyhqSAi5db6wOrDwQ9KiiRBa6cIdV-2eNvog6mCF_IO-mzXmKxei-zVmDLDxmfs2gH8N4pbb9CdKKsYONP-c48876iMSrppy_MI8T2TiDz3Xp25OmPERa0FICnFe-Qm0P2NOwQB1u8Lpz_RTblCOk4NoP79fA6-bBKPc9jW0qJHfZ12jZWE-0UphxH64we7x1gZr3BEukF5lXxN0QaTHHajtuYrJJTGMyjyZMJ4ztnm6WBmAVNs0GKyMnSaEqfkDfpbez-dx_M6K_FobgYVAzEwP-ENo-DN8MGV3ZwhjWTqiqQHgoYbCI_N_uxNcvgaHuRo-tIJ5yAj8o-JhL9Z6S1e1ngmuI4eIhBBHwgbHCjrws1yvcQjw4_EUBU963CLcasfA9FP5DtVBmbisdTuoTD9hM6PgIgYvQgxzhYnghEcNsE_aykNF5h3sgmR=w477-h903-no?authuser=0" alt="Consumo de dados" height="500"/>

  <img src="https://lh3.googleusercontent.com/uXN58KCNW6XMOEaFVk7RP7Km4Hqk1OiNoboqzlByQSCfXp3nEYSxCsAW-jbcTRRzCBpzD5TxE1cl5b2rB5o6JpXK6IGv6d8cNNNbEhV1nztwNmjG9DXY84tMIDO0CPSfCAunRh2BQBIuKjMMSeWwpie6wOZQA_ZxqUjfcv16zCLDtRFi_7uFx0Nx3yIV8cSOeNoJ56d7H5P9nJnlSsRKBCXtOneWzLza-50IrfbWSKB5aTYUeOuqWrnIS7dK6kjhN0Q3hSR5n8NKUbpDo8Hv5Q70qUJ60RrsGM5OeZJLncd9FptHxecTCfe75FASoe4VlE3vgEVY-VAfbL9aWYY1NrOKtuDUc-0-JvrCEjFA2LsT7t5OLeb3o6O4YvtbAgzqwfzyUAV1TkkJR0SQSAb6t4vD0QBP0J0apHFVqgVuI5jmf4ixY8dCgAEerpOwha5oxfdBsvtoLb__X5F8VNCFgW1EQv0CePfMvT0LvGT5yyHY3Wd2BnykzapDDBPHmMU5dvo1QRVOciYqvwyR-28ZhgDawnCQgKK6aFGdJFP9ncJCAAo4fVo6OYrhC5fDyPgkposlR5j8-bEUrwXUKV_1pZUk3_qBEVmeT3NJxqr_n-wp_FpYpg5AgDhO93wqv72JN_Ba7OCnyUPLJQ7fcdZMKDhJhE9DgfKhI-ifyqvDlgmr0YBQ_mrWfMl1tQDwXW9iXLRTAOuzgCxcy1fTltZ-ZyRp=w479-h903-no?authuser=0" alt="Consumo de minutos" height="500"/>

### Comprar adicional 
Ainda na mesma tela, há um botão flutuante no canto inferior direito que disponibiliza uma janela para contratar adicionais de dados ou minutos para o pacote. 

   <img src="https://lh3.googleusercontent.com/Yvv7-7eNVEDvRxPW0tLM3ro7dq7NRnxY_4HrPlfLwFrQXtKVfqVxSVmfyj9fQX2TfqhtfmjswCyY7UJLIl9L-FdJQ-N9HECLnAnySHRdpPbGymOuYoB-yP9nf1u3mQkS4FbM1l-xQKHiZprx_OnRzikTkPcFtyI9WVxiAOLKLE7zYRFrO9nKyXJHZsxdAuUUaSS9R2L3CHffosTyu1h7BXYGKhQtxEFitIoGNuYFR4ImAHVhqASqEhBwX2qemOqcClJnVSuUlda4Y_JU01z2bTJPsnt4T-6E84F1zdxNxMIgZo57GH1Hs4bYJxwkUiI3Uw3wUMe83GWphnDA2qCO4LbL1XhpMPAkrqFS3VVfmewIMrH2wpntrs-wa-vnhR7xS7ZLwSurWPXXz5XGospo4oYY6gHEIo-nNCfPe3r801OTkpUIlFLYei2dvVL_wd1m0SHY6dGgueD7uAflvzA94vKIJZbDefVuIs1v5wNY7fVtnhZRWe-uxyqEqMfQcAdCYPe2NP3swn0B1cLAiBAhOcKWuvnFrtMfrkPfbMadfTMsgsZ-MYpKdxqK_31BudsLRBcUjiQeiutPuN3ymoJoJZOFBlG7xVZW2cUGEcQXxUpOSTz3_Oul6V6F0caDqfvHBp4HcjI7sYy8kV6MHYE8XHA5mLp73IZLypZ7LnvmSqENEHEm4MqeFFNUJLx8IEGvuWZ74cKVBYZmetnYlr7iC-zX=w477-h903-no?authuser=0" alt="Contratar adicional" height="500"/>
   
   
   <img src="https://lh3.googleusercontent.com/B_GiGt_9u4Re2WtuQ-ji0x74nCgCz84l3UyTBQH1_U4_AVTfC6gYY9Cvhp3tuNpqPE4YOIQs542Kqh3NZra2qwaDUHV1fjccLqCovh9UJUZypfxcrZCSMCU2WY4BleRpwIE3-JU7CIOHq362WDgJesl8zhx06-sLvWzfvY2D4HfCtqIc0K8Rjdk66n2gEFINzLXEPN3rO7-704MiByIlznoWF6yiqvOF35vZ31Qq6bm_qLonfpQOyUwdQAbNKeO4rweWWefZYrmpen2vg1SXerimsiIziNeFl7dhgaKo__q35HTSgrbFbvwtv8i3WO4bl6cLsBUMIWddMYuLHQJza2lBIa1YpBgBqJkGcvx65CQCykEvzkow_Oq-D-56NDaBzN2HjAgqynNEUBT9WKhBxH0tmSEbDMuQFjTwDHMTL19I0DhIUoZMtAOk6MfT8L4eQAQVmjvC1jQyU9uP5IEdbb-IY1DK0w542D67WnLpMRAp-qSqNkgEFs3lbTxjigRnf_zJ80riUa5aFXE0cKsKRmO2o1GQifBjkLa-v65dOdIiv8Nm8JeoA-l259XQ_k4-Vv__Yb-kDVemmD2QcyeMuU768-kwAo9taLM2nOmdPICxSOgNLHTC_3Pz1Xj9lVvwQf6mA91ML3xTUk0eue4CZgi5ZAmjQk648wJVPbLiKsJBsJwbwCoZ_YA0582GHHGbe2neUuu9X6RuOeqAYnSGqyRL=w479-h903-no?authuser=0" alt="Compra efetuada com sucesso" height="500"/>

### Histórico
Aqui é possível verificar o consumo de dados em datas específicas dentro de um período. O iniício e o final do período podem ser alterados pelo usuário. 

 <img src="https://lh3.googleusercontent.com/cMf8hqY2tNHMAUl5ep94LSXS-WS6FfeGUvmtjX0BklGe9ntYrPgewI230RR20pZsYgxWP0P3Oud9LGFYhs7wKrfy2J_4NG3_2KQO_h6D_cFIeit78EdwDULY6xDwTU7LoRcE5Cnq0mFfp2BeDGBx4VglzLjX58ex3hpP-gdcdcyklUOEfZ2BkADKDtNwsrv2DNpa4wcUlS-LzIlToCDy0NVhtq_sVogRhGTyibd7FuwocPKOxTTC5Fc0qFlqs3TAgjjUOfgVq1dSWabXJ4oVrt7NUUx1qX_LQIQ_JdMC5WcpLPkG2Y-O5yEwjKb7n9jZqlfCH54-4M7clKOxdldzzw4PNJ-gHmCiD4qAbs62ld0g5Ha7y0qrfwXMo-AvF5_u8Lx0syPHyBV3z3Uy_w8ADQVYwflC8AFw00K-kFozVsL92e8G5lW-jLsdvUvtmsOLd8uZ6_oKW2jXnMpyniROx84yVZjVikA8_rxxLMyhrDe6ob0FOrQG8Mm9Ezo-C1toOHakmfsao9rFyf2AvK0Zr_igDKF5LZC80Pv7_IZFDSi3VEWxYOgxbL8SwkXbFxoh45zb5zUN6LAn9csva2ew60VSbYjiPPk_RkW_O5mT2qVOfYA-0ZF3zJEEoYVv4K-s3Jv7q1imKpDFAqq5pLDWN_Ib2IDZrVSBolSAVPCBWy2zBjInUteal7dvgMA66ZDI3hRQ1XC0D4Ms4UIrvKyZfSsU=w477-h903-no?authuser=0" alt="Histórico de consumo" height="500"/>

### Perguntas frequentes
Na tela de "Ajuda" é possível encontrar as perguntas frequentes sobre a Fluke e suas respostas. Sendo a lista de perguntas dividida por categorias. 

 <img src="https://lh3.googleusercontent.com/thVU9_8E4gtQgMh2yNejvhF2Z-mTcFTthxpmS8qB6Gos45MzAkw2HT-ohRbx5hkMpVlH12mKXyNG9aH5lN-5SIwGU9VD4S_FZ7h2s5HkEi_Hfq40HeydA-I71it0WZ9wHR7pKVy5BgBH2NEs7L6GCyycUfjrydReDaLflHaLoFvbDHCloRnOV7aon3f7J3xqR14b014VTFzzgcx1jh_n7P8Usbejk5Vtc_0c4s1YPK8a2La-pARzcXYJu0LevWtpgubJuGzEoG-DMnqHDQljXNutq6kdlREsjqBWHBhnCnfw6dox7i37HJX9stM9eOkehSuiyrrmtFSi2o_IW6JJjzZ-15y7Ysh1m6JgmvkpHG61IX7v3d9J7vA0AlMWDtp6vwP9_Bz2RsAy0GKbixa2AtellBgmPu7OathMZjB6BXIvLHKG1MqpSX9Qy3TCIUSsFnlMoL3LqzqEtrW926Adlujl9UZSEWgTabOqQIOed0nYGqN6LUYklqV1bQLHzl-HXofxRu6oAft9JdIk43LUS6LO8lrvNesndk4y1a4nTUI5PAgwJ38LFVNLNgSGMSiWxRYqyv0nDOKxNaCBsFZ31D5FMQ8p8_sEWlaTps0GEnJPg9dQcWsGEEWYKyX8EGawcR5vSa8eQrCmRsQu-8oI3vV7I3yEfVPlSXTdG4exfrpedUy83ule3663sfcpoJLkuNPKVVM11o0xzPnoJnqXEwAE=w478-h903-no?authuser=0" alt="Categorias de perguntas" height="500"/>
 
  <img src="https://lh3.googleusercontent.com/2G6SYIxHez9n-jY6UOX5LUKQMDY7T5-h_OK2jMsKI7Foud0acc_pSYaNRy9-fNkebD59YRo7o9XqLSq_QSmkBJSgFN3CK32xtZoE5YUdK7eyf-nQ0we-JgALpfLciGB0toKs09d0jf_Rx3H-g9Jepl2ej8-_-0IOJzQnbly4Xs-FBbDNCSl_m5ngK1zdgwv5VPT7czGyP5PEHF6t7ClonOaZ964KYiTx94QR8b_9wLnnQofk-AOcex7XX-XY-pGe80ZWkXigdbYJEE3hPIdMhJBpxtnbDakJAs_B7o4LJkp5VaeWfbmdKZcHaPFnAUuabJkK87PPP_xHTkd0zoi_NZjOKxnlwfBMXbQxda5IeL42831CQwpwYf765U_ZAcAg9LKeNrenwTY3WdCdytD6v_-bwSDo0rR1oVyLbvUTU_jSMD7QFJiJAUnLHl0SAvmca9K0-VYFrrcyElEQ3QRgBliGD22yDcCBqQK3fFdN7d1_sEFKLe__rXRMSM42yWgfFyZvwsa1zsG-uZMbo0-sfTWv95x3EoN60M13CGWznAPmm2FHl26PgeEZBWn5k6ZJTERu4H9CW6pR0MDit5lB8JnJFonX9jmYvL9igxZu7Zj1OmnXCE26-wEhUwKZkkEfZIfER6ZxvlM8TpZyhoseRYny00kLgr9ovAwuEToRMc4IZ8R3pXtSaVBhhBzUwCEWSZpAoW9l0s74H57e5MF0cxDn=w475-h903-no?authuser=0" alt="Perguntas" height="500"/>
  
   <img src="https://lh3.googleusercontent.com/rE8hmAHYpkjRbVdMKwP9d89T_JZywE996yYpcqUo9GMdS3zbN9aiPhfz9136O7lsYyOnzD43x2Ufx9_tnzMlAwk2lePzvGVqb6h9qcM_PY0zXorFba93ZLe7vspIP_KN9at9yeX7KPHZZozQveW9NiLL6kDlZnsWhRwssW6Es1nvKuKtBlXbGvTFDkATs6i1N2_42GB_Vp9MChS3ne8KLzRSFMuMMAMjRFYDzDxwZk-NsffVFnMA9sEvwNpETM3EOw_13WycreSCtwFw1usfjFACt9Kogi6KSoBZdHQDjVlZPxaFe9FjmcasuGUj9d4RNz2fDlJdQ5BSCC4Osbz9WjFBWJw7xtRhv0m_i6tpUNpM-6LpX_wi7PCqtG-kqqP-E-edONgXYB9rCnTVkBjt-1-QWwv7H3Hqubi__K49bdCe7M2-NBcbMJqRrgXsQtBOiZBv40ujM8CmlNfjIVX4x_CgAzWwRwuUEl__NOdO_Xu_rpjgicGyzKu7XWoj5RnU8wugj6DziLfdd3YXk97qH9qfZhpUzAMzaVjgAIPyin5eyMFikuVTZ-RaqNn7ceiEaQAyBWjXh9lmpqo7RKq6fjAB1Np-nWjVOpcMi4c5DfA9fVTN_F7aBOBPPdyHk6oxJAyZJceQnjw37xRH5YX3nSaXUpx4S9c2xJQUfATUx1bfBxKS3at1vVvoAyqkfQjzcI_MJWdpfa-re5_nSszyu1oh=w475-h903-no?authuser=0" alt="Resposta" height="500"/>

## Exercício 2<a name="exercicio_2"></a> 

O código do exercício 2 pode ser encontrado na pasta [desafio_2](https://github.com/pedrohb88/fluke_challenge/tree/main/desafio_2).

Para executá-lo basta rodar o comando: 

```sh
npm run numericCircle --radius [raio = número entre 1 e 100]
```

## Author

👤 **Pedro Leal**

* Github: [@pedrohb88](https://github.com/pedrohb88)
* LinkedIn: [linkedin.com\/in\/leal-pedro\/](https://linkedin.com/in/leal-pedro\/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
