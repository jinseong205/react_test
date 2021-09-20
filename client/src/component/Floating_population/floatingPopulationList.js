import React, { Component } from 'react';
import axios from "axios";
import X2JS from 'x2js';

class floatingPopulationList extends Component {
    constructor(props){
        super(props);

        this.state = {
            responseFpList : '',
            append_FpList : '',
        }
    }
    
    componentDidMount(){
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async() =>{
        axios.get('http://openapi.seoul.go.kr:8088/635661486b6a696e3934726a61554e/xml/BukChonInOutPeopleInfo/1/100/',{
        }).then(response =>{
            try{
                this.setState({ responseFpList : response });
                this.setState({ append_FpList:this.floatingPopulationListAppend() });
            }catch(error){
                alert(error)
            }
        }).catch(error => {alert(error); return false});
        
    }
    
    floatingPopulationListAppend = () => {
        
        let result =[]
        
        //x2js is converter xml to json object
        var x2js = new X2JS();
        var FPList = x2js.xml2js(this.state.responseFpList.data);
        var jsonString = JSON.stringify(FPList); 
        //alert(jsonString)
        
        var json = JSON.parse(jsonString)
        var content = json.BukChonInOutPeopleInfo.row;

        for(let i = 0; i < content.length; i++ ){
            var data = content[i];
            var idx = i + 1
            result.push(
              <tr class = "hidden_type">
                  <td>{idx}</td>
                  <td>{data.DEVICENAME}</td>
                  <td>{data.DESCRIPTION}</td>
                  <td>{data.STARTTIME}</td>
                  <td>{data.ENDTIME}</td>
                  <td>{data.INCOUNT}</td>
                  <td>{data.OUTCOUNT}</td>
              </tr>
            )
        }
        return result
    }

    render () {
        return (
            <section class="sub_wrap" >
                <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
                    <div class="li_top">
                        <h2 class="s_tit1">서울시 유동인구 </h2>
                    </div>
                    <div class="list_cont list_cont_admin">
                        <table class="table_ty1 fp_tlist">
                            <tr>
                                <th>Row</th>
                                <th>카메라 명칭</th>
                                <th>설명</th>
                                <th>시작시간</th>
                                <th>종료시간</th>
                                <th>진입 인원</th>
                                <th>진출 인원</th>
                            </tr>
                        </table>	
                        <table class="table_ty2 fp_tlist">
                           {this.state.append_FpList}
                        </table>
                    </div>
                </article>
            </section>
        );
    }
}

export default floatingPopulationList;