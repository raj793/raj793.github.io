import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { message } from 'antd';
import { Button } from 'react-mdl';

const info = () => {
        message.info('Open Source Pokedex V0.4');
      };

const layout = () => {

        return(
                <div style={{height: '100px', position: 'background'}}>
                <Layout style={{background: 'url(https://wallpapercave.com/wp/JKJhFUk.jpg) center / cover'}}>
                <Header transparent title="Pokedex" style={{color: 'white'}}>
                <Navigation>
                <a raised ripple onClick={info}>About</a>
                </Navigation>
                </Header>
                <Drawer title="Pokedex">
                <Navigation>
                <a href="#">Dummy</a>
                        </Navigation>
                        </Drawer>
                        <Content />
                </Layout>
                </div>
        );
    }

export default layout;