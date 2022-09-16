import React from 'react';
import './assets/css/common.css';
import useAxios from 'axios-hooks';
import Spinner from './components/Spinner';
import regexHelper from './libs/RegexHelper';


const App = () => {

  const [{ loading }, refetch] = useAxios({
    url: "http://localhost:3001/member",
    method: 'POST'
  }, { manual: true });

  const onSubmit = React.useCallback((e) => {
    e.preventDefault();

    const current = e.target;

    try {
      /* 아이디 검사 */
      regexHelper.value(current.id, '필수 정보입니다.');
      regexHelper.minLength(current.id, 5, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
      regexHelper.maxLength(current.id, 20, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
      regexHelper.engNum(current.id, '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');

      /* 비밀번호 검사 */
      regexHelper.value(current.pw1, '필수 정보입니다.');
      regexHelper.minLength(current.pw1, 8, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
      regexHelper.maxLength(current.pw1, 16, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
      regexHelper.engNum(current.pw1, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');

      /* 비밀번호 재확인 검사 */
      regexHelper.value(current.pw2, '필수 정보입니다.');
      regexHelper.compareTo(current.pw1, current.pw2, '비밀번호가 일치하지 않습니다.');

      /* 이름 검사 */
      regexHelper.value(current.userName, '필수 정보입니다.');

      /* 생년월일 검사 */
      regexHelper.value(current.year, '태어난 년도 4자리를 정확하게 입력하세요.');
      regexHelper.minLength(current.year, 4, '태어난 년도 4자리를 정확하게 입력하세요.');
      regexHelper.maxLength(current.year, 4, '태어난 년도 4자리를 정확하게 입력하세요.');
      regexHelper.num(current.year, '태어난 년도 4자리를 정확하게 입력하세요.');

      regexHelper.value(current.month, '태어난 월을 선택하세요.');

      regexHelper.value(current.day, '태어난 일(날짜) 2자리를 정확하게 입력하세요.');

      /* 성별 검사 */
      regexHelper.value(current.gender, '필수 정보입니다.');

      /* 본인 확인 이메일 검사 */
      regexHelper.email(current.email, '이메일 주소를 다시 확인해주세요.');

      /* 휴대전화 검사 */
      regexHelper.value(current.phoneNum, '필수 정보입니다. 인증이 필요합니다.');
      regexHelper.num(current.phoneNum, '형식에 맞지 않는 번호입니다.');
      regexHelper.num(current.checkNum, '인증번호는 숫자만 입력 가능합니다.');
    } catch (e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }

    const id = current.id.value;
    const pw1 = current.pw1.value;
    const pw2 = current.pw2.value;
    const userName = current.userName.value;
    const year = current.year.value;
    const month = current.month.value;
    const day = current.day.value;
    const gender = current.gender.value;
    const email = current.email.value;
    const phoneNum = current.phoneNum.value;
    const checkNum = current.checkNum.value;

    let json = null;

    (async () => {
      try {
        const response = await refetch({
          data: {
            id: id,
            pw1: pw1,
            pw2: pw2,
            userName: userName,
            year: parseInt(year),
            month: parseInt(month),
            day: parseInt(day),
            gender: gender,
            email: email,
            phoneNum: parseInt(phoneNum),
            checkNum: parseInt(checkNum)
          }
        });

        json = response.data;
      } catch (e) {
        console.error(e);
        window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
      }

      if (json !== null) {
        window.alert('저장되었습니다.');
      }
    })();
  }, []);



  return (
    <div>

      <Spinner visible={loading} />

      <div id='container'>
        <div id='header' className='membership'>
          <a href='http://www.naver.com' className='m_logo'>
            <span className='blind'>NAVER</span>
          </a>
        </div>

        <div id='naver_join'>
          <form id='join_form' name='join_form' onSubmit={onSubmit}>
            <div className='join_content'>
              <div className='group_row'>
                {/* 아이디 */}
                <div className='join_row'>
                  <h3 className='join_tit'>
                    <label htmlFor='id'>아이디</label>
                  </h3>
                  <span className='box id_v'>
                    <input type='text' id='id' name='id' className='field' maxLength='20' />
                    <span className='step_url'>@naver.com</span>

                  </span>
                </div>
                {/* 비번 */}
                <div className='join_row'>
                  <h3 className='join_tit'>
                    <label htmlFor='pw1'>비밀번호</label>
                  </h3>
                  <span className='box int_pw' id='pw1Img'>
                    <input type='password' id='pw1' name='pw1' className='field' maxLength='16' />
                  </span>
                  <h3 className='join_tit'>
                    <label htmlFor='pw2'>비밀번호 재확인</label>
                  </h3>
                  <span className='box int_pw_check' id='pw2Img'>
                    <input type='password' id='pw2' name='pw2' className='field' maxLength='16' />
                  </span>
                </div>
              </div>
              {/* 이름, 생년월일, 선택 이메일 */}
              <div className='group_row'>
                <div className='join_row'>
                  <h3 className='join_tit'>
                    <label htmlFor='userName'>이름</label>
                  </h3>
                  <span className='box box_o'>
                    <input type='text' id='userName' name='userName' className='field' maxLength='40' />
                  </span>
                </div>
                <div className='join_row join_bth'>
                  <h3 className='join_tit'>
                    <label htmlFor='year'>생년월일</label>
                  </h3>
                  <div className='bth_wrap'>
                    <div className='bth_yy'>
                      <span className='box'>
                        <input type='text' id='year' name='year' className='field' maxLength='4' placeholder='년(4자)'/>
                      </span>
                    </div>
                    <div className='bth_mm'>
                      <span className='box'>
                        <select id='month' name='month' className='sel'>
                          <option>월</option>
                          <option value='01'> 01 </option>
                          <option value='02'> 02 </option>
                          <option value='03'> 03 </option>
                          <option value='04'> 04 </option>
                          <option value='05'> 05 </option>
                          <option value='06'> 06 </option>
                          <option value='07'> 07 </option>
                          <option value='08'> 08 </option>
                          <option value='09'> 09 </option>
                          <option value='10'> 10 </option>
                          <option value='11'> 11 </option>
                          <option value='12'> 12 </option>
                        </select>
                      </span>
                    </div>
                    <div className='bth_dd'>
                      <span className='box'>
                        <input type='text' id='day' name='day' className='field' maxLength='2' placeholder='일'/>
                        <label htmlFor='day'></label>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='join_row join_gen'>
                  <h3 className='join_tit'>
                    <label htmlFor='gender'>성별</label>
                  </h3>
                  <div className='box gender_opt'>
                    <select name='gender' id='gender' className='sel'>
                      <option>성별</option>
                      <option value='M'>남자</option>
                      <option value='F'>여자</option>
                      <option value='U'>선택 안함</option>
                    </select>
                  </div>
                </div>
                <div className='join_row join_email'>
                  <h3 className='join_tit'>
                    <label htmlFor='email'>
                      본인 확인 이메일
                      <span className='choice'>(선택)</span>
                    </label>
                  </h3>
                  <span className='box int_email box_o'>
                    <input type='text' id='email' name='email' className='field' maxLength='100' placeholder='선택입력'/>
                  </span>
                </div>
              </div>
              {/* 휴대폰 번호, 인증번호 */}
              <div className='join_row join_phone'>
                <h3 className='join_tit'>
                  <label htmlFor='mobile'>휴대전화</label>
                </h3>
                <div className='box country'>
                  <select name='mobile' id='mobile' className='sel'>
                    <option value='81'> 일본 +81</option>
                    <option value='82' selected> 대한민국 +82</option>
                    <option value='86'> 중국 +86</option>
                  </select>
                </div>
                <div className='int_mobile_area'>
                  <span className='box int_mobile'>
                    <input type='tel' id='phoneNum' name='phoneNum' className='field' maxLength='16' placeholder='전화번호 입력'/>
                    <label htmlFor='phoneNum'></label>
                  </span>
                  <button type='submit' id='btnSend' className='btn_verify btn_primary'>
                    <span>인증번호 받기</span>
                  </button>
                </div>
                <div className='box_disable box_o' id='authNoBox'>
                  <input type='tel' id='checkNum' name='checkNum' className='field' maxLength='4' placeholder='인증번호 입력하세요'/>
                  <label htmlFor='checkNum'></label>
                </div>
              </div>
              <div className='btn_area'>
                <button type='submit' id='btnJoin' className='btn_type btn_primary'>
                  <span>가입하기</span>
                </button>
              </div>
            </div>
          </form>

          <div id='footer'>
            <ul>
              <li>
                <a href='#!'>이용약관</a>
              </li>
              <li>
                <a href='#!'>개인정보처리방침</a>
              </li>
              <li>
                <a href='#!'>책임의 한계와 법적고지</a>
              </li>
              <li>
                <a href='#!'>회원정보 고객센터</a>
              </li>
            </ul>
            <address>
              <em>
                <a href='#!' className='logo'>
                </a>
              </em>
              <em className='copy'>Copyright</em>
              <a href='#!' className='corp'>NAVER corp.</a>
              <span>All Rights Reserved.</span>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
