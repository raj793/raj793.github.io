import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import '../styles/PokeCard.css'

const layout = () => {

        return(
                <div style={{height: '200px', position: 'background'}}>
                <Layout style={{background: 'url(https://wallpapercave.com/wp/JKJhFUk.jpg) center / cover'}}>
                <Header transparent title="Pokedex" style={{color: 'white'}}>
                <Navigation>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                </Navigation>
                </Header>
                <Drawer title="Title">
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