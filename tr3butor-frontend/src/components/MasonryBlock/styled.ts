import styled from 'styled-components'

export const ScMasonryBlock = styled.div`
  .masonry-grid {
    display: -webkit-box; 
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
    .masonry-grid_column {
      padding-left: 30px;
      background-clip: padding-box;
     > div {
        margin-bottom: 30px;
      }
    }
  }`
