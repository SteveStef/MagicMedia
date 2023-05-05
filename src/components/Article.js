import React, { useRef, useEffect } from 'react';

const Accordion = () => {
  const headRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (headRef.current) {
        headRef.current.addEventListener('click', toggleDropdown);
      }
    return () => {
      headRef.current.removeEventListener('click', toggleDropdown);
    };
  }, []);

  const toggleDropdown = () => {
    bodyRef.current.classList.toggle('hidden');
  };

  return (
      <article className="accordion">
        <div className="accordion-head" ref={this.headRef}>
          <span>Sartorial Butcher Humblebrag</span>
          <span className="icon">
            <i className="icon fa fa-chevron-right"></i>
          </span>
        </div>
        <div className="accordion-body" ref={this.bodyRef}>
          <div className="content">
            <p>Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company. It is a
              free download provided by TemplateMo. There are 3 HTML pages, <a href="index.html">Home</a>, <a
                href="about.html">About</a>, and <a href="faqs.html">FAQ</a>.</p>
          </div>
        </div>
      </article>
    );
}

export default Accordion;