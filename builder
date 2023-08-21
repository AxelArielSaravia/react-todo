#! /bin/bash

#This Build use:
# Bun.js to bundle and minify javascript (https://bun.sh/)
# tdewolff/minify to minify html, css and json (https://github.com/tdewolff/minify)

prod=false
output=./public
input=./src

while getopts ":p" option; do
    case $option in
    p)
        prod=true
        ;;
    esac
done

html_o=$output/index.html
html_i=$input/index.html

html_4_o=$output/404.html
html_4_i=$input/404.html

css_o=$output/style.css
css_i=(
    $input/style.css
    $input/components/app.css
    $input/components/tag.css
    $input/components/color.css
    $input/components/modal.css
    $input/components/filter.css
    $input/components/todoItem.css
    $input/components/todoModal.css
)

manifest_i=$input/manifest.json
manifest_o=$output/app.webmanifest

js_i=$input/main.jsx

sw_i=$input/serviceworker.js


if [ ! -d $output ];
then
    echo "create $output"
    mkdir $output
fi

if [ $prod = true ];
then
    #HTML
    minify -v -o $html_4_o $html_4_i
    minify -v -o $html_o $html_i

    #CSS
    minify -v -o $css_o -b ${css_i[*]}

    #JS
    bun build $js_i --outdir $output --minify
    bun build $sw_i --outdir $output --minify

    #Manifest
    minify -v --type=json $manifest_i > $manifest_o
else
    #HTML
    cp $html_i $html_o
    cp $html_4_i $html_4_o

    #CSS
    if [ ! -f $css_o ];
    then
        touch $css_o
    else
        echo > $css_o
    fi
    cat ${css_i[*]} > $css_o
    echo "Concatenate ${css_i[*]} to $css_o"

    #JS
    bun build $js_i --outdir $output
    bun build $sw_i --outdir $output

    #Manifest
    if [ ! -f $manifest_o ];
    then
        touch $manifest_o
    else
        echo > $manifest_o
    fi
    cat $manifest_i > $manifest_o
fi
