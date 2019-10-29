import React from 'react';

const Footer = () => (
  <section className="hero is-dark p-lg" name="Footer">
    <div className="hero-body">
      <div className="container">
        <p className="title is-size-6 has-text-centered">
          2019 &copy; Totte Sjöman
        </p>

        <p className="is-size-7 has-text-centered">
          Icons made by{' '}
          <a
            className="is-primary"
            href="https://www.flaticon.com/<?=_('authors/')?>good-ware"
            title="Good Ware"
          >
            Good Ware
          </a>{' '}
          from{' '}
          <a
            className="is-primary"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
