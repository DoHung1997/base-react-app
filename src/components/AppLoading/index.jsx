import React from 'react';
import { Spin } from 'antd';
import classNames from 'classnames/bind';
import styles from './AppLoading.module.scss';

const cx = classNames.bind(styles);

export default function AppLoading({ listFile = false, upload = false, menuTool = false }) {
    return (
        <div
            className={cx(
                listFile ? 'list-file-size' : 'full-screen',
                upload && 'upload-page',
                menuTool && 'menu-tool',
            )}
        >
            <div className="center-width-height">
                <Spin size="large" className="loading-custom" />
            </div>
        </div>
    );
}
