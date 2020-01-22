import React from 'react';
import './Qa.scss';

const QUESTIONS_JSON = `[
    {
      "id": 1,
      "text": "注文してからどのくらいで届きますか？",
      "answer": "15時までのご注文で当日配送いたしますので、最短で翌日にお届けとなります。また、発送が完了しだい追跡番号をお知らせいたしますので、発送後の配達状況をお調べいただくことができます。"
    },
    {
      "id": 2,
      "text": "配送業者を指定できますか？",
      "answer": "しろねこメイル便でのお届けとなります。他の配送業者様や配送方法をご指定いただくことはできません。"
    },
    {
      "id": 3,
      "text": "送料はかかりますか？",
      "answer": "このページからのご注文に限り、送料無料でお届けいたします！キャンペーンコードの入力が必要となりますので、入力漏れがないかお確かめください。"
    },
    {
      "id": 4,
      "text": "返品は可能ですか？",
      "answer": "大変申し訳ございませんが、返品は承っておりません。ただし、発送の際に商品チェックを実施しておりますが、万が一ご注文いただいた商品と異なっていたり、破損や不具合などが見つかりました場合は、返品・交換対応をさせていただきます。"
    }
  ]`;

//   一つの質問とその回答を表示するdivを子コンポネントにする
  const Question = ({text, answer, isOpen, onClick}) => (
        <label onClick={onClick}>
          <div class="questions">
            <h6>{text}</h6>
            {isOpen && <p>{answer}</p>}
          </div>
        </label>
  )

  class Qa extends React.Component {
      constructor(props){
          super(props);
          this.questions = JSON.parse(QUESTIONS_JSON);
        //   回答が表示されている質問のidを配列でもてるようにする
          this.state = {
            openIds: []
          }
          this.handleClick = this.handleClick.bind(this);
      }
      handleClick(id){
        // 分割代入
        let {openIds} = this.state;
        openIds = openIds.includes(id) ? openIds.filter(e => e !== id) : [...openIds, id];
        this.setState({ openIds });
      }
      render(){
          return(
            <div class="q-wrapper">
              <div className="q-container">
                  <div class="q-title">
                    <h3>ご注文に際してよくあるご質問</h3> 
                  </div>
                  <div class="answer">  
                      {this.questions.map(q => (
                          <Question
                              key={q.id}
                              text={q.text}
                              answer={q.answer}
                              onClick={() => { this.handleClick(q.id); }}
                              isOpen={this.state.openIds.includes(q.id)}
                          />
                      ))}
                  </div>
              </div>
            </div>
          );
      }
  }

export default Qa;