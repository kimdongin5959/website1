
            //document가 객체 write가 메소드 하나의 객체에는 여러가지 메소드를 적용할 수 있습니다. 자바스크릅트는 객체 기반 언어입니다.
            document.write("안녕하세요<br>ㅎㅇ");
            
            var box;
            box=100;
            box=30;
            document.write(box+"<br>");
            /*
            --변수
            변화하는 값을 저장하는 공간
            한번에 1개의 데이터만 저장 가능
            새로운 데이터가 입력되면 기존의 값은 삭제
            변수명을 작성시 주의사항
            - 대소문자 구분
            - 변수명 제일 앞은 영문이나 _나 $만 가능
            - 변수명은 영문 $ _숫자만 포함 가능
            
            변수에 저장할 수 있는 데이터 종류
            문자형(String) 숫자형(Number) 논리형(Blooean) 빈(Null)
            */
            var box=50;
            document.write(box+"<br>");
            document.write(typeof box+"<br>");
            
            //기본명령어
            /*
            prompt("v페이지 수 입력하세요","");
            alert("자바스크립트");
            document.write("자바스크립트");
            console.log("자바스크립트");
            confirm("정말 삭제 하시겠습니까?")
            
            */
            
            var a=10;
            var b=3;
            var result;
            
            result=a+b;
            document.write(result+"<br>");
            
            result=a-b;
            document.write(result+"<br>");
            
            result=a*b;
            document.write(result+"<br>");
            
            result=a/b;
            document.write(result+"<br>");
            
            result=a%b;
            document.write(result+"<br>");
            
            /*
                대입연산자
                연산된 데이터를 지정된 변수에 대입할 때 사용
                
                A=B---A=B
                A+=B---A=A+B
                A*=B---A=A*B
            */
            
            var num1=10;
            var num2=3;
            
            num1+=num2;
            document.write(num1+"<br>");
            
            num1-=num2;
            document.write(num1+"<br>");
            
            num1*=num2;
            document.write(num1+"<br>");
            
            num1/=num2;
            document.write(num1+"<br>");
            
            num1%=num2;
            document.write(num1+"<br>");
            
            /*
                비교연산자
                A>B--------A가 B보다 크다
                A>=B-------A가 B보다 크거나 같다
                A<B--------A가 B보다 작다
                A<=B-------A가 B보다 작거나 같다
                A==B-------A와 B가 같다(데이터 상관x)
                A!=B-------A와 B가 다르다(데이터 상관x)
                A===B-------A와 B가 같다(데이터 일치 ture)
                A!==B-------A와 B가 다르다(데이터 불일치 ture)
            */
            var A=10;
            var B=3;
            var result;
            
            result=A>B;
            document.write(result+"<br>");
            
            result=A<=B;
            document.write(result+"<br>");
            
            result=A==B;
            document.write(result+"<br>");
            
            result=A!=B;
            document.write(result+"<br>");
            
            var B="10";
            
            result=A==B;
            document.write(result+"<br>");
            
            result=A!=B;
            document.write(result+"<br>");
            
            result=A===B;
            document.write(result+"<br>");
            
            result=A!==B;
            document.write(result+"<br>");
            
            result=A+B;
            document.write(result+"<br>");
            
            /*
                증감연산자
                변수에 저장된 값을 1씩 증가 시킴
                반대로 감소 연산자는 변수에 저장된 값을 1씩 감소
                ++x 값은 우선 1을 증가 시킨 후에 계산
                x++ 값은 먼저 계산을 하고 1증가
            */
            
            var num1=3;
            
            document.write(num1+"<br>");
            document.write((++num1)+"<br>");
            document.write(num1+"<br>");
            document.write((num1++)+"<br>");
            document.write((++num1)+"<br>");
            document.write((num1--)+"<br>");
            document.write((--num1)+"<br>");
            
            /*
                논리연산자
                결과값이 true false 반환됨
                
                ||(or),or연산자라 부르며 피연산자 중 값이 하나라도 ture면 ture
                
                &&(and),and연산자라 부르며 피연산자 중 값이 하나라도 false면 false
                
                !(not),not연산자라 부르며 단항 연산자.
                피연산자 중 값이 true이면 반대로 false로 결과값을 반환함
                
                연산자 우선순위
                1.()
                2. 단항 연산자(--,++,!)
                3. 산술 연산자(*,/,%,+,-)
                4. 비교 연산자(>,>=,<,<=,==,===,!==,!=)
                5. 논리 연산자(&&,||)
                6. 대입 (복합 대입) 연산자(=,+=,-+,*=,/=,%=)
            */
            
            var a = (3>2)&&(5>3);
            document.write(a+"<br>");
            
            var a = (3<2)&&(5>3);
            document.write(a+"<br>");
            
            var a=10;
            var b=20;
            var m=30;
            var n=40;
            var result;
            
            result=a<b||b>=m||m>n
            document.write(result+"<br>");
            
            result=a<=b&&b<=m&&m<=n;
            document.write(result+"<br>");
            
            result=!(a>b);
            document.write(result+"<br>");
            
            
            /*예제 - 평균점수 구하기*/
            /*
            var kor=Number(prompt("당신의 국어점수는?"));
            var eng=Number(prompt("당신의 영어점수는?"));
            var math=Number(prompt("당신의 수학점수는?"));
            var avg=(kor+eng+math)/3;
            var result=avg>=70&&kor>=60&&eng>=60&&math>=60;
            alert(result);
            */
            
            /*예제 대상자 나이 구하기*/
            /*
            var age=prompt("당신의 나이는?");
            var result=age>=19&&age<=34||age>=65;
            alert(result);
            */
            
            /*예제 적정체중구하기*/
            /*
            var userH=Number(prompt("당신의 키를 입력하세요"));
            var normalW=(userH-100)*0.9;
            alert(nomalW);
            */
            
            /*
                삼항조건연산자
                결과가 참 또는 거짓일때 각각 다른 실행문을 수행
                조건식 ? 실행문1 : 실행문2
            */
            
            /*
            var num1="30";
            var num2=30;
            
            num1===num2 ? alert("진실") : alert("거짓");
            */
            
            /*
            var result=confirm("너는 자바스크립트가 좋니?")
            result ? alert("좋아") : alert("싫어");
            */
            
            /*
            var num=prompt("숫자를 입력하시오");
            num%2==0 ? alert("짝수") : alert("홀수");
            */
            
            /*
            var price1=Number(prompt("식비는?"));
            var price2=Number(prompt("교통비는?"));
            var price3=Number(prompt("음료비는?"));
            
            var total=price1+price2+price3;
            
            total>10000?alert(total-10000+"원 초과") : alert("돈관리 잘했어요")
            */
            
            /*
            var userN=prompt("당신의 이름은?");
            var userH=prompt("당신의 키는?");
            var userW=prompt("당신의 몸무게는?");
            
            var normalW=(userH-100)*0.9;
            var result=userW>normalW-5&&userW<normalW+5;
            
            result=result ? "적정체중입니다" : "적정체중이아닙니다";
            
            alert(userN+"님은"+result);
            */
            
            /*
                조건문
                조건문은 조건식을 만족(ture)
                했을때만 실행문을 수행하는 제어문
                
                if(조건식){
                    실행문1;
                }else{
                    실행문2;
                }
                
                if(조건식1){
                    실행문1;
                }else if(조건식2){
                    실행문2;
                }else if(조건식3){
                    실행문3;
                }else(조건식4){
                    실행문4;
                }
            */
            
            /*
            var num=10;
            if(num<500){
                alert("정답");
            }else{
                alert("오류");
            }
            */
            
            /*
            var result=confirm("정말로 탈퇴를 하시겠습니까?");
            
            if(result){
                alert("탈퇴완료");
            }else{
                alert("탈퇴취소");
            }
            */
            
            /*
            var num=prompt("점수를 입력해주세요");
            
            if(num>=90){
                alert("A학점");
            }else if(num>=80){
                alert("B학점");
            }else if(num>=70){
                alert("C학점");
            }else if(num>=60){
                alert("D학점");
            }else{
                alert("F학점");
            }
            */
            
            /*
            var userN=prompt("당신의 이름은?");
            var userA=prompt("당신의 나이는?");
            
            if((userN=="동인"||userN=="김동인")&&userA=="50"){
                alert("본인");
            }else{
                alert("본인 아님");
            }
            */
            
            /*
            var id="thejoeun";
            var pw="ehddls12";
            
            var userId=prompt("아이디를 입력하세요");
            
            if(userId==id){
                var userPw=prompt("비밀번호를 입력하세요");
                if(userPw==pw){
                    alert(userId+"님 환영합니다");
                }else{
                    alert("비밀번호 불일치")
                }
            }else{
                alert("아이디 불일치");
            }
            */
            
            /*
                swich~case문
                지정한 변수에 저장된 데이터와 정확히 일치되는
                경우가 있는지 검사하여 일치하는 테이터가
                있을때에는 해당 실행문을 수행함.
                break문으로 반복을 끝냄
                
                var 변수=초기값;
                swich(변수){
                    case 값1:코드1;
                    break;
                    case 값2:코드2;
                    break;
                    case 값3:코드3;
                    break;
                    case 값4:코드4;
                    break;
                    default:코드5;
                }
            */
            
            /*
            var num=prompt("숫자를 입력하세요");
            switch(num){
                case "1":
                    alert("정답아님");
                    break;
                case "2":
                    alert("정답아님");
                    break;
                case "3":
                    alert("정답");
                    break;
                default:
                    alert("아무것도 아님")
            }
            */
            
            /*
            var myArea=prompt("당신의 지역은 어디입니까?");
            switch(myArea){
                case "서울":
                    areaNum="02";
                    break;
                case "부산":
                    areaNum="051";
                    break;
                case "경기도":
                    areaNum="031";
                    break;
                default:
                    alert("등록되지 않은 지역입니다")
            }
            alert(myArea+"지역번호는"+areaNum+"입니다");
            */
            
            /*
            var site=prompt("네이버,다음,네이트,구글 중 \n 즐겨 사용하는 포털 검색 사이트는?");
            
            switch(site){
                case "구글":
                    url="www.google.com";
                    break;
                case "네이버":
                    url="www.naver.com";
                    break;
                case "네이트":
                    url="www.nate.com";
                    break;
                case "다음":
                    url="www.daum.com";
                    break;
                default:
                    alert("보기에 없음");
            }
            if(url){
                var openNewWindow=window.open("about:blank");
                openNewWindow.location.href="http://"+url;
            }
            */
            
            /*
                반복문
                while문
                -조건식을 만족할때까지 코드를 여러 회 반복하여 실행.
                
                var 변수 = 초기값;
                while(조건식){
                    실행문;
                    증감식;
                }
                
                do while문
                while문의 경우에는 조건식의 만족 여부를 먼저 검사 한 후 중괄호에 있는 코드의 실행 여부를 결정하지만,
                do while문은 반드시 한 번은 코드를 실행하고 조건식을 검사함.
                
                var 변수 = 초기값;
                do{
                    자바스크립트코드;
                    증감식;
                }while(조건식)
            */
            
            var i=1;
            while(i<=100){
                if(i%5==0){
                    document.write(i+"<br>");
                }
                i++;
            }
            
            var i=0;
            do{
                document.write(i+"<br>");
                i++;
            }while(i<10);
            
            /*
                for문
                for문 조건식을 만족할때까지 특정 코드를 반복하여 실행.
                사용방법은 while문과 같지만
                while문 보다 사용하기가 편해 사용 빈도가 높음.
                
                for(초기값; 조건식; 증감식){
                    실행문;
                }
            */
            
            for(i=1; i<10; i++){
                document.write(i+"<br>");
            }
            
            for(var i=6; i>=1; i--){
                document.write("<h"+i+">h"+i+"재미있는 자바스크립트</h"+i+">");
            }
            
            /*
                break문
                반복문에서 break문을 실행하면
                조건식과 상관없이 강제로 반복문을 종료
                즉 반복문을 강제로 종료할떄 사용됨
                
                continue문
                반목문에서만 사용 가능
                while문에서 사용할 경우는 다음에 오는 코드는
                무시하고 바로 조건식으로 이동해 조건을 검사함
            */
            
            for(var i=1; i<=10; i++){
                if(i==6){
                    continue;
                }
                document.write(i+"<br>");
            }
            
            for(var i=1; i<=10; i++){
                if(i==6){
                    break;
                }
                document.write(i+"<br>");
            }
            
            /*
            for(var i=0; true; i++){
                alert(i+"번째 반복문입니다");
                if(!confirm("계속하시겠습니까")){
                    break;
                }
            }
            */
            
            
            for(var i=2; i<=9; i++){
                document.write("<h1>"+i+"단"+"</h1>");
                for(var k=1; k<=9; k++){
                    document.write(i+"x"+k+"="+(i*k)+"<br>");
                }
            }
            
            var arr=[1,2,"c","d"];
            document.write(typeof arr[3]+"<br>");
            
            function if_jabascript(){
                var id=document.getElementById("txt_value").value;
                if(id=="더조은"){
                    alert("일치")
                }else{
                    alert("불일치")
                }
            }