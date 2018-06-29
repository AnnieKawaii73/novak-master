import React from 'react'
import PropTypes from 'prop-types'
import styles from './Icon.module.scss'
import {Icon} from 'react-icons-kit'
import * as icoMoon from 'react-icons-kit/icomoon'
import * as materialDesign from 'react-icons-kit/md'
import * as fontAwesome from 'react-icons-kit/fa'
import * as ionic from 'react-icons-kit/iconic'
import * as entypo from 'react-icons-kit/entypo'
import * as metrize from 'react-icons-kit/metrize'
import * as ikons from 'react-icons-kit/ikons'
import * as linea from 'react-icons-kit/linea'
import * as ionics from 'react-icons-kit/ionicons'
import * as octicons from 'react-icons-kit/oct'
import * as typicons from 'react-icons-kit/typicons'
import * as notoEmojiRegular from 'react-icons-kit/noto_emoji_regular'
import * as feathericons from 'react-icons-kit/feather'

let Icons = {
    IcoMoon: icoMoon,
    MaterialDesign: materialDesign,
    FontAwesome: fontAwesome,
    Ionic: ionic,
    Entypo: entypo,
    Metrize: metrize,
    Ikons: ikons,
    Linea: linea,
    Ionics: ionics,
    Octicons: octicons,
    Typicons: typicons,
    NotoEmojiRegular: notoEmojiRegular,
    Feathericons: feathericons
}

export default class IconComponent extends React.Component {
    render(){
        let {is, from, ...rest} = this.props
        const icon = Icons[from][is] 
        return(
            <Icon className={styles.Icon} {...rest} icon={icon}/>
        )
    }
}
IconComponent.propTypes={
    is: PropTypes.string,
    from: PropTypes.oneOf(  ['IcoMoon',
                            'MaterialDesign',
                            'FontAwesome',
                            'Ionic',
                            'Entypo',
                            'Metrize',
                            'Ikons',
                            'Linea',
                            'Ionics',
                            'Octicons',
                            'Typicons',
                            'NotoEmojiRegular',
                            'Feathericons',])
}
IconComponent.defualtProps={
    is: null,
    from: 'Feathericons'
}