import React from 'react';
import 'antd-mobile/dist/antd-mobile.css'
import { SearchBar, List, Tabs, ListView } from 'antd-mobile';
const Item = List.Item;
// const Brief = Item.Brief;

const tabs2 = [
    { title: '我的常用问诊表', sub: '1' },
    { title: '科室问诊表库', sub: '2' },
];

const datas = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const foodArr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

const dataSource = datas.cloneWithRows(foodArr);

const renderRow = function (rowData, sectionID, rowID, highlightRow) {
    return (
        <Item arrow="horizontal" 
              onClick={() => { }}
        >
            <div
                style={{
                    fontSize:16,
                }}
            >复发性精神分裂症</div>
        </Item>
    );
}

class TeachArticlePage extends React.Component {
    render() {
        return (
            <div>
                <SearchBar 
                    placeholder="Search" 
                    maxLength={8} 
                    style={{
                        height:44,
                    }}
                />

                <Tabs tabs={tabs2}
                    initialPage={1}
                    tabBarActiveTextColor='#1F88F8'
                    renderTab={
                        tab => <span
                                style={{
                                    fontSize:14,
                                }}
                                >{tab.title}</span>
                    }
                    tabBarUnderlineStyle={{
                        border:'1px #1F88F8 solid',
                        marginLeft:'15%',
                        width:'20%',
                    }}
                    style={{
                        height:44,
                    }}
                >
                    <div >
                        <List className="my-list">
                            <Item arrow="horizontal" onClick={() => { }}>复发性精神分裂症</Item>
                        </List>

                    </div>
                    <div>
                        <ListView
                            dataSource={dataSource}
                            renderRow={renderRow}
                            initialListSize={50}
                            style={{
                                height:document.documentElement.clientHeight - 88,
                            }}
                            scrollRenderAheadDistance={500}
                            onEndReachedThreshold={20}
                        />
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default TeachArticlePage;


