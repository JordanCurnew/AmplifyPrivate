import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Get started today',
    paragraph: 'Whether you are a company in need of talent, or an individual looking to make an impact, sign up to TalentShare today'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — You have talent that another company needs! Sign up and get the opportunity to bring your innovative ideas and talents to the aid of another startup.
                      </p>
                  <p></p>
                  <Button style={{display:'flex', justifyContent:'center'}} tag="a" color="primary" wideMobile href="/Individual-Sign-Up">
                    Individual Sign-up
                    </Button>
                </div>
                <div style={{textAlign:'center'}} className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span  className="testimonial-item-name text-color-high">Individual</span>
                  {/* <span className="text-color-low"> / </span> */}
                  <span className="testimonial-item-link">
                    {/* <a href="#0">AppName</a> */}
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — As a startup we know how hard it can be to hire all the talent you need. Sharing talent with other startups allows both to mutually benefit!
                      </p>
                      <p></p>
                  <Button style={{display:'flex', justifyContent:'center'}} tag="a" color="primary" wideMobile href="/Company-Sign-Up">
                    Company Sign-up
                    </Button>
                </div>
                <div style={{textAlign:'center'}} className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Company</span>
                  {/* <span className="text-color-low"> / </span> */}
                  <span className="testimonial-item-link">
                    {/* <a href="#0">AppName</a> */}
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;