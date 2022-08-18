#!/bin/bash
#腳本
echo ""
#輸出當前時間
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
#判斷寶塔webhook參數是否存在
# if [ ! -n "$1" ];
# then 
#         echo "param参数错误"
#         echo "End"
#         exit
# fi
#git項目路徑
gitPath="/home/ubuntu/webhook"
#git 網址
gitHttp="https://github.com/ChecheHuang/webhook.git"

echo "Web站點路徑：$gitPath"

#判斷項目是否存在
if [ -d "$gitPath" ]; then
        echo "我要開始了"
        cd $gitPath
        #判斷是否存在git目錄
        if [ ! -d ".git" ]; then
                echo "在該目錄下克隆 git"
                git clone $gitHttp gittemp
                mv gittemp/.git .
                rm -rf gittemp
        fi
        #拉取項目最新文件
        #git reset --hard origin/master
        git pull 
        cd react
        echo "開始打包"
        #npm run build && cp -rp /home/ubuntu/webhook/react/build /home/ubuntu/webhook
        sleep 5
        echo "睡了五秒"
        echo "我要結束了"
        exit
else
        echo "該項目路徑不存在"
        echo "End"
        exit
fi

