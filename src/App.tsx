/*
 * @Author: maxin-wu
 * @Date: 2021-07-06 14:41:55
 * @LastEditTime: 2021-07-12 15:28:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \maxin-component\src\App.tsx
 */
import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Menu Component</h2>
          <Menu mode='vertical' onSelect={(index) => {console.log(index)}} defaultOpenMenus={['3']}>
            <MenuItem>aaa</MenuItem>
            <MenuItem>bbb</MenuItem>
            <MenuItem>ccc</MenuItem>
            <SubMenu title="subMenu">
              <MenuItem>ddd</MenuItem>
              <MenuItem>eee</MenuItem>
              <MenuItem>fff</MenuItem>
            </SubMenu>
            <SubMenu title="subMenu2">
              <MenuItem>www</MenuItem>
              <MenuItem>rrr</MenuItem>
              <MenuItem>eee</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <div>
          <h2>Button Component</h2>
          <Button disabled={true}>disabled</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={() => {console.log(123123213)}}>PrimaryLg</Button>
          <Button btnType={ButtonType.Default} size={ButtonSize.Small}>Default</Button>
          <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Primary</Button>
          <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>danger</Button>
          <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="https://www.baidu.com">link</Button>
          <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="https://www.baidu.com" disabled={true}>link</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
