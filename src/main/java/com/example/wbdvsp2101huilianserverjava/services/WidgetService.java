package com.example.wbdvsp2101huilianserverjava.services;

import com.example.wbdvsp2101huilianserverjava.models.Widget;
import com.example.wbdvsp2101huilianserverjava.repositories.WidgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WidgetService {

    @Autowired
    WidgetRepository repository;

    public Widget createWidget(String tid, Widget widget) {
        widget.setTopicId(tid);

        return repository.save(widget);
    }
    public List<Widget> findAllWidgets() {
        return (List<Widget>) repository.findAll();
    }
    public List<Widget> findWidgetsForTopic(String tid) {
        return repository.findWidgetsForTopic(tid);
    }
    public Integer updateWidget(Long wid, Widget widget) {
        Widget originalWidget = repository.findById(wid).get();
        if(widget.getId() != null) {
            originalWidget.setId(widget.getId());
        }
        if(widget.getTopicId() != null) {
            originalWidget.setTopicId(widget.getTopicId());
        }
        if(widget.getType() != null) {
            originalWidget.setType(widget.getType());
        }
        if(widget.getSize() != null) {
            originalWidget.setSize(widget.getSize());
        }
        if(widget.getText() != null) {
            originalWidget.setText(widget.getText());
        }
        if(widget.getSrc() != null) {
            originalWidget.setSrc(widget.getSrc());
        }
        if(widget.getHeight() != null) {
            originalWidget.setHeight(widget.getHeight());
        }
        if(widget.getWidth() != null) {
            originalWidget.setWidth(widget.getWidth());
        }
        if(widget.getOrdered() != null) {
            originalWidget.setOrdered(widget.getOrdered());
        }
        repository.save(originalWidget);
        return 1;
    }
    public Integer deleteWidget(Long wid) {
        repository.deleteById(wid);
        return 1;
    }
    public Widget findWidgetById(Long wid) {
        return repository.findById(wid).get();
    }
}
