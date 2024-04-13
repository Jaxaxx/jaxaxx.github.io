#!/bin/bash

npm run write-translations -- --locale zh-Hans

mkdir -p i18n/zh-Hans/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/zh-Hans/docusaurus-plugin-content-docs/current


mkdir -p i18n/zh-Hans/docusaurus-plugin-content-blog
cp -r blog/** i18n/zh-Hans/docusaurus-plugin-content-blog



mkdir -p i18n/zh-Hans/docusaurus-plugin-content-pages
cp -r src/pages/**.md* i18n/zh-Hans/docusaurus-plugin-content-pages
