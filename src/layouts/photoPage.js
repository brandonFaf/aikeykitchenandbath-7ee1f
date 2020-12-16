import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix } from '../utils';

export default class PhotoPage extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <header className='post-header inner-sm'>
          <h1 className='post-title'>
            {_.get(this.props, 'page.title', null)}
          </h1>
          {_.get(this.props, 'page.blurb', null) && (
            <div className='post-subtitle inner-sm'>
              {htmlToReact(_.get(this.props, 'page.blurb', null))}
            </div>
          )}
        </header>
        <div className='post-feed'>
          <div className='post-feed-inside'>
            {_.map(
              _.get(this.props, 'page.photos', null),
              (photo, photo_idx) => (
                <article key={photo_idx} className='post post-card'>
                  <div className='post-inside'>
                    <header></header>
                  </div>
                  <div className='post-inside'>
                    {_.get(photo, 'asset', null) && (
                      <img
                        src={withPrefix(_.get(photo, 'asset', null))}
                        alt={_.get(photo, 'title', null)}
                      />
                    )}
                    {_.get(photo, 'caption', null) && (
                      <div className='post-content'>
                        <p>{_.get(photo, 'caption', null)}</p>
                      </div>
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </Layout>
    );
  }
}
