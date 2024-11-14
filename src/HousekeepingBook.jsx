import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const HousekeepingBook = () => {

  // 총 금액 호출
  const result = useSelector( (state) => {
    return state.amounts.result;
  })

  // 리스트 호출
  const list = useSelector ( (state) => {
    return state.amounts.list;
  } )

  // 수정용 디스패치 호출
  const dispatch = useDispatch();

  // 금액 계산 함수
  const sum = () => {

    // 부르고자 하는 type 호출
    const sign = document.querySelector('input[name="btn-radio"]:checked').value;

    // 금액 num text 호출
    const numText = parseInt(document.getElementById("amounts").value);

    // 입력된 금액이 빈값이 아니거나 0 이상이라면
    if (numText != null && numText > 0) {

      // 항목 수정
      dispatch({type: "amountsSlice/"+sign, num: numText});

      // 입력 필드 초기화
      document.getElementById("amounts").value = "";

    } else {

      // 금액이 올바르지 않을 경우
      alert("올바른 금액을 입력해주세요!");

    }

  }

  return (
    <div>
      <div>
        <label htmlFor="earnings">수입</label>
        <input type="radio" name="btn-radio" id="earnings" value="earnings" defaultChecked/>
        <label htmlFor="expenditure">지출</label>
        <input type="radio" name="btn-radio" id="expenditure" value="expenditure"/>
      </div>
      <div>
        <label htmlFor="amounts_textBox">금액</label>
        <input
          type="number"
          name="amounts"
          id="amounts"
          placeholder="0"
          onKeyDown={(event) => {
            if (event.code == "Enter") {
              sum();
            }
          }
        }/>
        <button onClick={sum}>등록</button>
      </div>
      <h3>총 금액: {result ?? 0}</h3>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            ({item.type})
            {item.num}
            <button onClick={() => {
              dispatch({type: "amountsSlice/delete", id: item.id, num: item.num, text: item.type})
            }}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HousekeepingBook;