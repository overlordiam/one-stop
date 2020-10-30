import React from "react";
import {connect} from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({sections}) => {
      return(
      <div className = "directory-menu">
      {
        sections.map(({id , ...othersectionsprops}) => (
        <MenuItem
          key = {id}
            {...othersectionsprops}
            />
      ))
      }

      </div>
    );

}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
