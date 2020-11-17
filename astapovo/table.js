function create_sample_table(parentNode, head, body, foot, data) {
    if (typeof head == "undefined") {head = true;}
    if (typeof body == "undefined") {body = true;}
    if (typeof foot == "undefined") {foot = true;}
    if (!data) {
        data = {
            "head": [ "English", "Chinese"],
            "body": [
                [ "You're never serious, you turn everything into a joke.",  "你从不认真, 你把一切变成一个笑话。" ],
                [ "I had to contend with my wife.",                                "我不得不和我的妻子抗衡。" ],
                [ "She has forfeited her right",                        "她丧失了权利" ],
                [ "You can't know how grateful I am.",                               "你不知道我有多感恩。" ],
                [ "He has always felt an affinity with ordinary people.",     "他一直与普通百姓有一种亲和力。" ],
                [ "Unclear messages? You've just given me a message, which is totally unclear.", "不清楚的讯息？您刚刚给我发了一条消息，还不清楚。" ],
                [ "Nobody outside of marriage knows what goes on inside it.",    "婚姻以外的人都不知道婚姻内部发生了什么。" ],
                [ "How do you measure good?",     "您如何衡量良好？"   ],
                [ "but perhaps not in the eyes of his wife.",              "但也许不是在他妻子的眼中。"   ],
                [ "I think they saved me from despair.",    "我认为他们使我免于绝望。"  ],
                
            ],
            "foot": [ "English", "Chinese"],
        };
    }
    var table = document.createElement("table");
    var tr, th, td;
    // header
    tr = document.createElement("tr");
    var headers = data.head || [];
    for (var i=0;i<headers.length;i++) {
        th = document.createElement("th");
        th.innerHTML = headers[i];
        tr.appendChild(th);
    }
    if (head) {
        var thead = document.createElement("thead");
        thead.appendChild(tr);
        table.appendChild(thead);
    } else {
        table.appendChild(tr);
    }
    // end header

    // body
    var table_body = data.body || [];
    if (body) {
        var tbody = document.createElement("tbody");
    }
    for (var i=0;i<table_body.length;i++) {
        tr = document.createElement("tr");
        for (var j=0;j<table_body[i].length;j++) {
            td = document.createElement("td");
            td.innerHTML = table_body[i][j];
            tr.appendChild(td);
        }
        if (body) {
            tbody.appendChild(tr);
        } else {
            table.appendChild(tr);
        }
    }
    if (body) {
        table.appendChild(tbody);
    }
    // end body

    // footer
    if (foot) {
        var tfoot = document.createElement("tfoot");
        tr = document.createElement("tr");
        var footer = data.foot || [];
        for (var i=0;i<footer.length;i++) {
            th = document.createElement("th");
            th.innerHTML = footer[i];
            tr.appendChild(th);
        }
        tfoot.appendChild(tr);
        table.appendChild(tfoot);
    }
    // end footer

    if (parentNode) {
        parentNode.appendChild(table);
    }
    //return table;
}
