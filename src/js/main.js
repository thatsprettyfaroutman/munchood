import React      from 'react';
import Header     from 'components/header.react';
import HeroImage  from 'components/hero-image.react';
import TextBlock  from 'components/text-block.react';
import Image      from 'components/image.react';
import SignupForm from 'components/signup-form.react';
import People     from 'components/people.react';
import Map        from 'components/map.react';
import Footer     from 'components/footer.react';

class App extends React.Component {

  render() {
    return (
      <div className="app">

        <Header />

        <section className="hero">
          <HeroImage />
          <div className="hero__text grid-row">
            <div className="grid-col grid-col--50 grid-col--tablet--60 grid-col--center">
              <TextBlock row="0" align="center" />
            </div>
          </div>
        </section>

        <section className="features">
          <div className="grid-row features__item">
            <div className="grid-col grid-col--40 grid-col--tablet--50">
              <TextBlock row="1" addSpace="after" />
            </div>
            <div className="grid-col grid-col--60 grid-col--tablet--50">
              <Image row="0" />
            </div>
          </div>
          <div className="grid-row features__item">
            <div className="grid-col grid-col--40 grid-col--tablet--50 grid-col--right">
              <TextBlock row="2" addSpace="before" />
            </div>
            <div className="grid-col grid-col--60 grid-col--tablet--50 grid-col--right">
              <Image row="1" />
            </div>
          </div>
        </section>

        <section className="signup">
          <div className="grid-row grid-row--no-padding">
            <div className="grid-col grid-col--100">
              <TextBlock row="3" />
              <SignupForm />
            </div>
          </div>
        </section>

        <section className="team">
          <div className="team__top">
            <div className="grid-row">
              <div className="grid-col grid-col--50 grid-col--tablet--60 grid-col--center">
                <TextBlock row="4" align="center" />
              </div>
            </div>
          </div>
          <People />
        </section>

        <section className="contact-info">
          <div className="grid-row grid-row--no-padding grid-row--full-width">
            <div className="grid-col grid-col--40 grid-col--right">
              <TextBlock row="5" addSpace="before" />
            </div>
            <div className="grid-col grid-col--60 grid-col--right">
              <Map />
            </div>
          </div>
        </section>

        <Footer />

      </div>
    )
  }

}

React.render(<App />, document.body);
