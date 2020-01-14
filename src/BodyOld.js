import React from 'react';
import { findAllByDisplayValue } from '@testing-library/react';

class BodyOld extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openAns1: false,
            openAns2: false,
            openAns3: false,
            openAns4: false,
        }
    }
    handleClick(targetName){
        console.log('targetName', targetName);
        console.log('this.state', this.state);
        //   []でkeyになる変数を指定する
          this.setState({
              [targetName]: !this.state[targetName]
          });
    }

    render(){
        const answer1 = "15時までのご注文で当日配送いたしますので、最短で翌日にお届けとなります。また、発送が完了しだい追跡番号をお知らせいたしますので、発送後の配達状況をお調べいただくことができます。";
        const answer2 = "しろねこメイル便でのお届けとなります。他の配送業者様や配送方法をご指定いただくことはできません。";
        const answer3 = "このページからのご注文に限り、送料無料でお届けいたします！キャンペーンコードの入力が必要となりますので、入力漏れがないかお確かめください。";
        const answer4 = "大変申し訳ございませんが、返品は承っておりません。ただし、発送の際に商品チェックを実施しておりますが、万が一ご注文いただいた商品と異なっていたり、破損や不具合などが見つかりました場合は、返品・交換対応をさせていただきます。";
        return(
            <div>
                <div class="title">
                    <p>ご注文に際してよくあるご質問</p>
                </div>
                <div class="question">
                    {/* 更新するstateを引数として渡す */}
                    <label onClick={this.handleClick.bind(this, 'openAns1')}>
                        <p>注文してからどのくらいで届きますか？
                            <p>
                                {
                                this.state.openAns1 && answer1
                                }
                            </p>
                        </p>
                    </label>
                </div>
                <div class="question">
                    <label onClick={this.handleClick.bind(this, 'openAns2')}>
                        <p>配送業者を指定できますか？
                            <p>
                                {
                                this.state.openAns2 && answer2
                                }
                            </p>
                        </p>
                    </label>
                </div>
                <div class="question">
                    <label onClick={this.handleClick.bind(this, 'openAns3')}>
                        <p>送料はかかりますか？
                            <p>
                                {
                                this.state.openAns3 && answer3
                                }
                            </p>
                        </p>
                    </label>
                </div>
                <div class="question">
                    <label onClick={this.handleClick.bind(this, 'openAns4')}>
                        <p>返品は可能ですか？
                            <p>
                                {
                                this.state.openAns4 && answer4
                                }
                            </p>
                        </p>
                    </label>
                </div>
            </div>
        );
    }
}

export default BodyOld;