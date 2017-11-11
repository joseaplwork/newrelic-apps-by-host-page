export const styles = `
  .EmptyViewScope {
    margin: 100px auto;
    width: 250px;
    height: 340px;
    text-align: center;
  }

  .EmptyViewScope > svg {
    width: 100%;
    display: inline-block;
  }

  .EmptyViewScope p {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  .EmptyViewScope.animate {
    animation-duration: 250ms;
    animation-name: zoomIn;
    animation-timing-function: cubic-bezier(.01,.01,.48,1.27);
  }

  @-ms-keyframes zoomIn {
    from {
      opacity: 0;
      -ms-transform: translate3d(0, -25px, 0) scale(0.9);
      transform: translate3d(0, -25px, 0) scale(0.9);
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: translate3d(0, -25px, 0) scale(0.9);
    }
  }
`;

export const template = ({ icon, message }) => `
  <div class="EmptyViewScope animate">
    ${icon}
    <p>${message}</p>
  </div>
`;
