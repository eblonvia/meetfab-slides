// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Link,
  CodePane,
  Appear,
  List,
  ListItem
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('./style.css');

const images = {
  logoAdfab: require('../assets/logo_adfab.png'),
  logo: require('../assets/logo.svg'),
  photo: require('../assets/now-coworking-crop.jpg'),
  angular: require('../assets/angular.png'),
  backbone: require('../assets/backbone.png'),
  ember: require('../assets/ember.png'),
  technos: require('../assets/technos.png'),
  vdom: require('../assets/vdom.png'),
  vdomInception: require('../assets/vdom_inception.jpg'),
  webpack: require('../assets/webpack.gif'),
  hnpwa: require('../assets/hnpwa.png'),
  xbox: require('../assets/xbox.png'),
  tests: require('../assets/tests.jpg'),
  cordova: require('../assets/cordova.png'),
  ionic: require('../assets/ionic.png'),
  xamarin: require('../assets/xamarin.svg'),
  weex: require('../assets/weex.svg'),
  nativescript: require('../assets/nativescript.png'),
  eric: require('../assets/eric.gif'),
  fiber: require('../assets/fiber.png'),
  javascriptcore: require('../assets/javascriptcore.png'),
  ssr: require('../assets/ssr.png'),
  flux: require('../assets/flux.png'),
  redux: require('../assets/redux.png'),
  reduxStructure: require('../assets/redux-structure.jpg'),
  snap: require('../assets/snap.png'),
  reactToRN: require('../assets/react-to-rn.jpg'),
  bridge: require('../assets/bridge.jpg'),
  coeuraveclesmains: require('../assets/coeuraveclesmains.gif'),
  codeStyleClassic: require('../assets/codeStyleClassic.jpg')
};

preloader(images);

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'yellow',
    // secondary: "white",
    tertiary: 'white'
  },
  {
    primary: 'Helvetica neue',
    secondary: 'Helvetica'
  }
);

const slideProps = {
  padding: 0,
  transition: ['fade'],
  bgColor: 'primary'
};

const headingProps = {
  size: 5,
  caps: true,
  textColor: 'secondary',
  fontWeight: 'light'
};

export default class Presentation extends React.Component {
  state = {
    color: 'black'
  };

  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide {...slideProps}>
          <img src={images.logoAdfab} />
          <Heading {...headingProps}>
            Bienvenue
            <br />
            chez Adfab
          </Heading>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.photo} className="portrait" />
          <Text textColor="secondary">Pierre-Alexandre Dupuy</Text>
          <Text textColor="secondary">@padupuy</Text>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.logo} className="App-logo" alt="logo" />
          <List>
            <Appear>
              <ListItem>React</ListItem>
            </Appear>
            <Appear>
              <ListItem>Architecture React + tips</ListItem>
            </Appear>
            <Appear>
              <ListItem>React SSR</ListItem>
            </Appear>
            <Appear>
              <ListItem>React Native</ListItem>
            </Appear>
            <Appear>
              <ListItem>Démo</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>React</Heading>
          <img src={images.logo} alt="logo" width="250" height="250" />
          <Appear>
            <Text textColor="secondary">Jordan Walke - Facebook - 2013</Text>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <img className="techno" src={images.angular} />
          <img className="techno" src={images.backbone} />
          <img className="techno" src={images.ember} />
        </Slide>
        <Slide {...slideProps}>
          <img width="610" height="458" src={images.technos} />
          <br />
          <Link href="https://medium.com/this-dot-labs/building-modern-web-applications-in-2017-791d2ef2e341">
            https://medium.com/this-dot-labs/building-modern-web-applications-in-2017-791d2ef2e341
          </Link>
        </Slide>
        {/*
          <Slide {...slideProps}>
          <Heading {...headingProps}>Virtual DOM</Heading>
          <img src={images.vdomInception} />
          <br />
          <Link>
            http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
          </Link>
        </Slide>
      */}
        <Slide {...slideProps}>
          <Text textColor="secondary">React c'est le V dans MVC</Text>
          <Text textColor="secondary">Dirty checking, on oublie</Text>
          <Text textColor="secondary">Shadow DOM pas assez performant</Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Virtual DOM</Heading>
          <img src={images.vdom} width="533" height="300" />
          <Text textColor="secondary">
            Determines the minimal set of DOM operations necessary via a diff
            algorithm
          </Text>
          <Link href="https://www.infoq.com/presentations/react-reconciliation">
            https://www.infoq.com/presentations/react-reconciliation
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/jsx.example')}
          />
        </Slide>
        <CodeSlide
          transition={['fade']}
          lang="js"
          code={require('raw-loader!../assets/jsx.example')}
          ranges={[
            { loc: [3, 4], note: 'importer React' },
            { loc: [5, 6], note: 'les composants sont des classes' },
            { loc: [6, 15], note: 'déclarer une fonction render' },
            { loc: [8, 13], note: 'HTML' },
            { loc: [8, 9], note: 'className remplace class' },
            {
              loc: [20, 21],
              note: 'Utilisation comme une balise html classique'
            }
          ]}
        />
        <Slide {...slideProps}>
          <Heading {...headingProps}>props</Heading>
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/props.example')}
          />
        </Slide>
        <Slide
          transition={['fade']}
          bgColor={this.state.color}
          textColor="primary"
        >
          <Heading {...headingProps}>state</Heading>
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/state.example')}
          />
          <br />
          <div>
            <button
              onClick={() => {
                this.setState({
                  color: this.state.color === 'yellow' ? 'black' : 'yellow'
                });
              }}
            >
              Changer la couleur d'arrière plan
            </button>
          </div>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Composition</Heading>
          <CodePane
            lang="javascript"
            source={require('raw-loader!../assets/composition.example')}
          />
        </Slide>
        {/*
        <Slide {...slideProps}>
          <Heading {...headingProps}>Lifecycle</Heading>
          <Text textColor="secondary">Creation</Text>
          <List>
            <ListItem>constructor()</ListItem>
            <ListItem>componentWillMount()</ListItem>
            <ListItem>render()</ListItem>
          </List>
          <Text textColor="secondary">Mise à jour</Text>
          <List>
            <ListItem>componentDidMount()</ListItem>
            <ListItem>componentWillReceiveProps()</ListItem>
            <ListItem>shouldComponentUpdate()</ListItem>
            <ListItem>componentWillUpdate()</ListItem>
            <ListItem>(bis) render()</ListItem>
            <ListItem>componentDidUpdate()</ListItem>
            <ListItem>componentWillUnmount()</ListItem>
          </List>
        </Slide>
        */}
        <Slide {...slideProps}>
          <img src={images.webpack} />
          <Text textColor="secondary">debugging webpack</Text>
          <br />
          <Appear>
            <Text textColor="secondary">create-react-app</Text>
          </Appear>
        </Slide>
        {/*
        <Slide {...slideProps}>
          <Heading {...headingProps}>Tests</Heading>
          <br />
          <img src={images.tests} />
        </Slide>
        */}
        <Slide {...slideProps}>
          <Heading {...headingProps}>Jest</Heading>
          <img src={images.snap} width="700" height="410" />
          <Link href="https://facebook.github.io/jest/docs/snapshot-testing.html">
            https://facebook.github.io/jest/docs/snapshot-testing.html
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Airbnb</Heading>
          <Text textColor="secondary" style={{ marginBottom: 20 }}>
            Mocha 45mn =&gt; Jest 14.5mn
          </Text>
          <Link href="https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50">
            https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Architecture React</Heading>
          <List>
            <ListItem>Architecture des données</ListItem>
            <ListItem textColor="secondary">Architecture d'un projet</ListItem>
            <ListItem textColor="secondary">Tips</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Flux</Heading>
          <img src={images.flux} width="800" height="242" />
          <Link href="https://facebook.github.io/flux/docs/videos.html">
            https://facebook.github.io/flux/docs/videos.html
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Redux</Heading>
          <img src={images.redux} width="200" height="181" />
          <Text textColor="secondary">Dan Abramov - 2015</Text>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.reduxStructure} />
          <Link href="https://syon.github.io/wiki/react/">
            https://syon.github.io/wiki/react/
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Architecture d'un projet</Heading>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={images.codeStyleClassic} width="360" height="300" />
          </div>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Tips</Heading>
          <List>
            <ListItem>
              Tout est composant = factorisation / réutilisabilité
            </ListItem>
            <ListItem>Functionnal Component / PureComponent</ListItem>
            <ListItem>shouldComponentUpdate</ListItem>
            <ListItem>Redux saga / observable</ListItem>
            <ListItem>Reselect</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>React SSR</Heading>
          <Text textColor="secondary">SEO / Rapidité</Text>
          <Text textColor="secondary">Netflix / Paypal / M6</Text>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.ssr} />
          <Link href="https://goralewicz.com/blog/javascript-seo-experiment/">
            https://goralewicz.com/blog/javascript-seo-experiment/
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Next.js</Heading>
          <img src={images.hnpwa} width="700" height="392" />
          <Link href="https://github.com/codebusking/next-hnpwa-guide-kit">
            https://github.com/codebusking/next-hnpwa-guide-kit
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.xbox} width="515" height="427" />
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>à surveiller</Heading>
          <List>
            <ListItem>Vue.js</ListItem>
            <ListItem>Preact</ListItem>
            <ListItem>Mobx</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.fiber} width="380" height="430" />
          <List>
            <ListItem>http://isfiberreadyyet.com/</ListItem>
            <ListItem>
              Compatibilité garantie de sa librairie avec les versions
              précédentes.
            </ListItem>
            <ListItem>Utilisé en prod par facebook</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>React Native</Heading>
          <Appear>
            <Text textColor="secondary">Facebook - 2015</Text>
          </Appear>
        </Slide>
        <Slide {...slideProps}>
          <img className="techno" src={images.cordova} />
          <img className="techno" src={images.ionic} />
          <Text textColor="secondary">Applications hybrides</Text>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Pourquoi pas du natif ?</Heading>
          <List>
            <ListItem>Cout de développement</ListItem>
            <ListItem>Temps de développement</ListItem>
            <ListItem>Ressources rares et chères</ListItem>
            <ListItem>Dette technique plus importante</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <img src={images.reactToRN} />
        </Slide>
        <Slide {...slideProps}>
          <img src={images.bridge} />
          <Link href="https://speakerdeck.com/ncuillery/how-to-react-native">
            https://speakerdeck.com/ncuillery/how-to-react-native
          </Link>
        </Slide>
        {/*
          <Slide {...slideProps}>
          <Heading {...headingProps}>Dans le ventre de RN</Heading>
          <List>
            <ListItem>Plus de WebView</ListItem>
            <ListItem>JavaScriptCore - 2013</ListItem>
            <ListItem>
              Composants React =&gt; composants natifs
            </ListItem>
          </List>
        </Slide>
        */}
        <Slide {...slideProps}>
          <Heading {...headingProps}>JavaScriptCore - Android</Heading>
          <img src={images.javascriptcore} />
          <Link href="https://blog.expo.io/modernizing-js-bundles-for-react-native-with-babili-late-2016-f625e754ab94">
            https://blog.expo.io/modernizing-js-bundles-for-react-native-with-babili-late-2016-f625e754ab94
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Bridge</Heading>
          <img src={images.coeuraveclesmains} />
          <List>
            <ListItem>Bridge surchargé = ralentissement de l'App</ListItem>
            <ListItem>Bridge en bonne santé = app en bonne santé</ListItem>
            <ListItem>
              Offloading animations =&gt; useNativeDriver: true
            </ListItem>
            <ListItem>InteractionManager.runAfterInteractions()</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Made by Facebook</Heading>
          <List>
            <ListItem>
              Yoga : cross-platform layout engine = flex everywhere
            </ListItem>
            <ListItem>
              Fresco : Android library for managing images and the memory they
              use
            </ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Native Modules</Heading>
          <List>
            <ListItem>Alert, AsyncStorage : API standardisée</ListItem>
            <ListItem>
              SegmentedControlIOS, ViewPagerAndroid : Mono plateforme{' '}
            </ListItem>
            <ListItem>
              API identique entre les modules fournis par FB et les modules
              tiers
            </ListItem>
            <ListItem>DIY : Compétences natives requises</ListItem>
            <ListItem>react-native link (mais attention)</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Avantages</Heading>
          <List>
            <ListItem>
              Si vous maîtrisez déjà React, vous savez coder en React Native
            </ListItem>
            <Appear>
              <ListItem>
                On peut faire du spécifique iOS / Android très simplement
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Debug son code JS avec Chrome DevTools</ListItem>
            </Appear>
            <Appear>
              <ListItem>Hot / Live reload : pas de compilation !</ListItem>
            </Appear>
            <Appear>
              <ListItem>UX</ListItem>
            </Appear>
            <Appear>
              <ListItem>Temps de développement court</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Communauté / conférence : http://bit.ly/2t8JHqm
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Inconvénients</Heading>
          <List>
            <ListItem>
              Encore pas mal de bug (layout, overflow, zIndex) mais il y a une
              nouvelle release chaque mois, on guette à chaque fois la release
              note avec attention
            </ListItem>
            <Appear>
              <ListItem>
                Mise à jour délicate mais les devs ont toujours de supers idées
                https://github.com/ncuillery/rn-diff
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Gros débat sur la navigation mais des solutions performantes
                existent
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Concurrents</Heading>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={images.nativescript} />
            <img src={images.xamarin} height="136" />
            <img src={images.weex} />
          </div>
          <List>
            <ListItem>NativeScript : Telerik / Google - Angular JS</ListItem>
            <ListItem>Xamarin : Microsoft - c#</ListItem>
            <ListItem>Weex : Alibaba / Taobao - Vue JS</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Tips</Heading>
          <List>
            <ListItem>Utiliser un mac</ListItem>
            <ListItem>Utiliser des composants natifs</ListItem>
            <ListItem>Tester plusieurs librairies</ListItem>
            <ListItem>Temps développement ios ≠ android</ListItem>
            <ListItem>Développer en même temps sous android et ios</ListItem>
            <ListItem>Tester au fur et à mesure sur des vrais devices</ListItem>
            <ListItem>Tester les perf avec des versions packagées</ListItem>
          </List>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Démo</Heading>
        </Slide>
        <Slide {...slideProps}>
          <Heading {...headingProps}>Merci</Heading>
          <img src={images.eric} />
        </Slide>
      </Deck>
    );
  }
}
